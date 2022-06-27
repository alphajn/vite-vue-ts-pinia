/**
 * 接口代理配置
 *
 * @type {Object}
 */

export type TypeParams = {
    url: string,
    headers?: <T>(x: T) => T | { [key: string]: string | number }
    params?: <T>(x: T) => T | { [key: string]: string | number }
    responseHandle?: <T>(x: T) => T
}

type TypeObject = {
    [key: string]: TypeParams
}

const apis: TypeObject = {
    '@api/': {
        url: 'demo.com',
    },
};

export default apis;
