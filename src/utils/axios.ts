import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import proxy from '@/config/proxy';
import type { ParamsType } from '@/config/proxy';

const Axios = axios.create({
    timeout: 30000, // 30秒
    // withCredentials: true, // `withCredentials` 表示跨域请求时是否需要使用凭证
});

const matchConfig = (config: AxiosRequestConfig): ParamsType => {
    const cache: ParamsType = {
        url: config.url || '',
    };

    Object.keys(proxy).some((key) => {
        if (cache.url.indexOf(key) === 0) {
            const {
                url,
                headers = {},
                params,
                responseHandle,
            } = proxy[key];

            cache.url = cache.url.replace(key, url);

            cache.headers = typeof headers === 'function' ? headers(config.headers) : headers;
            cache.params = typeof params === 'function' ? params(config.params) : params;
            cache.responseHandle = typeof responseHandle === 'function' ? responseHandle : undefined;

            return true;
        }

        return false;
    });

    return cache;
};

type TypeRequestHandle = { responseHandle?: ParamsType['responseHandle'] } & AxiosRequestConfig;

/**
 * 请求参数处理
 *
 * @param {object} config 请求参数
 * @returns {object} 处理后的参数
 */
const requestHandle = (config: TypeRequestHandle) => {
    const {
        url,
        headers,
        params,
        responseHandle,
    } = matchConfig(config);

    // 添加国际化
    // config.headers = {
    //     'Accept-Language': getI18nLang(),
    //     ...config.headers,
    // };

    config.url = url;
    config.responseHandle = responseHandle;

    // 处理 headers
    if (headers) {
        config.headers = { ...headers, ...config.headers };
    }

    // 处理 params
    if (params) {
        config.params = { ...params, ...config.params };
    }

    config.params = {
        ...config.params,
        r: Math.random().toString(32).substring(2),
    };

    return config;
};

/**
 * 请求结果处理
 *
 * @param {object} response axios返回的结果
 * @returns {object} 处理之后的结果
 */
const responseHandle = (response: AxiosResponse) => {
    const data = { ...response.data };

    data.success = data.success || (data.code >= 200 && data.code <= 300) || data.status === 'ok';
    data.code = data.code || 200;
    data.message = data.message || data.error || 'Error in request';

    // 如果代理有处理相应函数优先使用
    // @ts-ignore
    if (response.config.responseHandle) {
        // @ts-ignore
        return response.config.responseHandle(data, response);
    }

    return data;
};

/**
 * 错误处理
 *
 * @returns {object} 处理之后的结果
 */
const errorHandle = (error: Error) => ({
    success: false,
    code: 500,
    data: null,
    message: 'Access error, please try again later',
    error,
});

// 请求参数处理
Axios.interceptors.request.use(
    (config) => requestHandle(config),
    (error) => errorHandle(error),
);

// 响应数据处理
Axios.interceptors.response.use(
    (response) => responseHandle(response),
    (error) => errorHandle(error),
);

export default Axios;
