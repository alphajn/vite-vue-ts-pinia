/**
 * @file 路由中语言处理-导航守卫
 */

import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import {
    supportLang,
    setAsyncLang,
    getLanguage,
    replacePath,
} from '@/lang/i18n';
import { lang, langs } from '@/config/setup';

export default [
    ({ path, query, hash }: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext):void => {
        const pathLang = path.split('/')[1];

        // 如果连接中没有语言，则使用 browser > default
        if (!supportLang(pathLang) && langs.length > 1) {
            const defaultLang = getLanguage();

            return next({
                path: replacePath(path, defaultLang),
                query,
                hash,
                replace: true,
            });
        }

        // 设置语言
        setAsyncLang(pathLang || lang).then(() => next());
    },
];
