# Vue 3 + TypeScript + Vite

``` js
开始

pnpm i
```

## 工程配置

- [editorconfig 统一编辑器代码风格配置](.editorconfig配置)
- [代码提交规范 husky+lint-staged](代码提交规范)
- [eslint](eslint)
- [stylelint](stylelint)
- [自动导入](自动导入)
- [vue-i18n 国际化](vue-i18n)
- [vue-roter 路由](vue-roter)
- [pinia 状态管理](pinia)
- [axios 请求](axios)

### .editorconfig配置

```js
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 150

[*.{json,yml}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

### 代码提交规范

- feat: 新功能
- fix: 修复bug
- docs: 文档改变
- style: 代码格式改变
- refactor: 某个已有功能重构
- perf: 性能优化
- test: 增加测试
- build: 改变了build工具
- ci: 对我们的 CI 配置文件和脚本的更改
- chore: 构建过程或辅助工具的变动
- revert: 撤销上一次的 commit
- merge：代码合并

#### 管理git hook工具 `husky`

```js
// 安装husky
pnpm add -D husky

npm set-script prepare "husky install"
pnpm prepare

// 安装 lint-staged 仅对暂存区的文件进行校验
pnpm add -D lint-staged

// 添加pre-commit
npx husky add .husky/pre-commit "pnpm lint-staged"
```

#### commit管理

<https://commitlint.js.org/#/>

```js
pnpm add -D @commitlint/config-conventional @commitlint/cli

// 添加交验配置文件
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

// 添加commit-msg文件 如果$1添加丢失需要手动添加
npx husky add .husky/commit-msg "pnpm commitlint --edit $1"
```

#### 配置lint-staged

```json
"lint-staged": {
    "*.{js,jsx,ts,tsx,vue,scss}": [
      "pnpm lint"
    ]
}
```

### eslint

```js
// 安装依赖
pnpm add -D eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-config-airbnb-base

// 配置文件
.eslintrc.js
.eslintignore
```

### stylelint

```js
// 安装依赖
pnpm i -D stylelint stylelint-config-recommended-vue stylelint-config-standard-scss postcss-html sass stylelint-scss postcss

// 配置文件
.stylelintrc.js
.stylelintignore
.vscode/settings.json
```

## 项目配置

### 自动导入

```js
// unplugin-auto-import 自动导入
pnpm add -D unplugin-auto-import

// 配置
import AutoImport from 'unplugin-auto-import/vite'

plugins: [
    AutoImport({
        include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/, /\.vue\?vue/, // .vue
            /\.md$/, // .md
        ],
        imports: ['vue', 'vue-router', 'vue-i18n'],
        dts: 'src/auto-import.d.ts', // 可以选择auto-import.d.ts生成的位置（默认根目录），建议设置为'src/auto-import.d.ts'
        eslintrc: {
            enabled: true,
            filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
    })
]

// unplugin-vue-components vue组件库的自动按需导入
pnpm add -D unplugin-vue-components

// 配置
import ViteComponents from 'unplugin-vue-components/vite';

plugins: [
    ViteComponents({
        // 允许子目录作为组件的命名空间前缀。
        directoryAsNamespace: true,
        // 配置文件生成位置
        dts: 'src/components.d.ts',
    })
]
```

### vue-i18n

```js
// 安装
pnpm add vue-i18n@9
```

### vue-roter

```js
// 安装
pnpm add vue-router@4
```

### pinia

``` js
// 安装
pnpm add pinia
```

### axios

``` js
// 安装
pnpm add axios
```
