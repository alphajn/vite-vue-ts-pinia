import {
    createRouter,
    createWebHistory,
    NavigationGuard,
    NavigationGuardWithThis,
    NavigationHookAfter,
    RouteRecordRaw,
} from 'vue-router';
import { langs } from '@/config/setup';
import langEach from './langEach';
import routes from './routes';

const routeList: RouteRecordRaw[] = routes;

if (langs.length > 1) {
    // 生成多语言路由
    langs.forEach((lang) => {
        routes.forEach((item) => {
            routeList.push({
                ...item,
                path: `/${lang}/${item.path.replace(/^\/+/, '')}`,
                meta: {
                    layout: 'Default',
                    ...item.meta,
                },
            });
        });
    });
} else {
    routes.forEach((item) => {
        routeList.push({
            ...item,
            path: `/${item.path.replace(/^\/+/, '')}`,
            meta: {
                layout: 'Default',
                ...item.meta,
            },
        });
    });
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routeList,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {
            left: 0,
            top: 0,
        };
    },
});

/**
 * 添加路由守卫
 *
 * @param {object|array} context 路由守卫
 */

type TypeContext = NavigationGuard[] | {
    [propName: string]: {
        beforeEach?: NavigationGuard[],
        afterEach?: NavigationGuard[]
    }
};

const routerEach = (context: TypeContext) => {
    if (Array.isArray(context)) {
        context.forEach((item) => router.beforeEach(item));
    } else {
        if (Array.isArray(context.beforeEach)) {
            context.beforeEach.forEach((item: NavigationGuardWithThis<undefined>) => router.beforeEach(item));
        }

        if (Array.isArray(context.afterEach)) {
            context.afterEach.forEach((item: NavigationHookAfter) => router.afterEach(item));
        }
    }
};

routerEach(langEach);

export default router;
