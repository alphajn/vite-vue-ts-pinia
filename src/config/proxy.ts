/**
 * 接口代理配置
 *
 * @type {Object}
 */

export type ParamsType = {
    url: string,
    headers?: <T>(x: T) => T | { [key: string]: string | number }
    params?: <T>(x: T) => T | { [key: string]: string | number }
    responseHandle?: <T>(x: T) => T
}

interface ApiInterface {
    [key: string]: ParamsType
}

const apis: ApiInterface = {
    '@api/': {
        url: 'demo.com',
    },
};

export default apis;
