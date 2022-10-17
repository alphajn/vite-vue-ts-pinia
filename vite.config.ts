import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import VueComponents from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: ['vue', 'vue-router', 'vue-i18n', 'pinia'],
            dts: 'src/auto-import.d.ts', // 可以选择auto-import.d.ts生成的位置（默认根目录），建议设置为'src/auto-import.d.ts'
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
            },
            resolvers: [ElementPlusResolver()],
        }),
        VueComponents({
            directoryAsNamespace: true,
            resolvers: [ElementPlusResolver()],
            // // 配置文件生成位置
            dts: 'src/components.d.ts',
        }),
        ElementPlus(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@c': path.resolve(__dirname, 'src/components'),
        },
    },
    build: {
        // minify: 'terser', // lib下建议开启
    },
    css: {
        postcss: {
            plugins: [
                // eslint-disable-next-line
                require('autoprefixer'),
            ],
        },
    },
    server: {
        open: '/',
    },
});
