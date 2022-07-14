// https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test',
            'merge',
        ]],
    },
    prompt: {
        questions: {
            type: {
                description: '选择您要提交的更改类型',
                enum: {
                    feat: {
                        description: '一个新功能',
                        title: 'Features',
                        emoji: '✨',
                    },
                    fix: {
                        description: '修复bug',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    docs: {
                        description: '文档改变',
                        title: 'Documentation',
                        emoji: '📚',
                    },
                    style: {
                        description: '代码格式改变',
                        title: 'Styles',
                        emoji: '💎',
                    },
                    refactor: {
                        description: '某个已有功能重构',
                        title: 'Code Refactoring',
                        emoji: '📦',
                    },
                    perf: {
                        description: '性能优化',
                        title: 'Performance Improvements',
                        emoji: '🚀',
                    },
                    test: {
                        description: '添加缺失的测试或纠正现有的测试',
                        title: 'Tests',
                        emoji: '🚨',
                    },
                    build: {
                        description: '影响构建系统或外部依赖项的更改',
                        title: 'Builds',
                        emoji: '🛠',
                    },
                    ci: {
                        description: '对我们的 CI 配置文件和脚本的更改',
                        title: 'Continuous Integrations',
                        emoji: '⚙️',
                    },
                    chore: {
                        description: '构建过程或辅助工具的变动',
                        title: 'Chores',
                        emoji: '♻️',
                    },
                    revert: {
                        description: '撤销上一次的 commit',
                        title: 'Reverts',
                        emoji: '🗑',
                    },
                    merge: {
                        description: '合并代码',
                        title: 'Merge',
                        emoji: '🗑',
                    },
                },
            },
            scope: {
                description: '此更改的范围是什么（例如组件或文件名）',
            },
            subject: {
                description: '写一个简短的命令式时态描述变化',
            },
            body: {
                description: '提供更详细的更改说明',
            },
            isBreaking: {
                description: '是否有任何重大变化?',
            },
            breakingBody: {
                description: '一个 BREAKING CHANGE 提交需要一个主体。 请输入对提交本身的更长描述',
            },
            breaking: {
                description: '描述重大变化',
            },
            isIssueAffected: {
                description: '此更改是否会影响任何未解决的问题？',
            },
            issuesBody: {
                description: '如果问题已关闭，则提交需要一个主体。 请输入对提交本身的更长描述',
            },
            issues: {
                description: '添加问题参考 (例如 "fix #123", "re #123".)',
            },
        },
    },
};
