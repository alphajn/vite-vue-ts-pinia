/**
 * @file 统一全局顶部 Toast 提示
 * @date 2022-10-14
 */

import { ElMessage } from 'element-plus';
import type { MessageParamsWithType, MessageHandler } from 'element-plus';
// import type { DefineComponent } from 'vue';

export type Toast = {
    [propname: string]: (arg: string | MessageParamsWithType) => MessageHandler
}

// icon components
// const iconMap: Record<string, DefineComponent> = {
//     info: warning,
//     success,
//     warning,
//     error,
// };

// 生成options
const generateOptions = (type: string, opt: string | MessageParamsWithType): MessageParamsWithType => {
    const options = typeof opt === 'string' ? { message: opt, type } : { ...opt, type };

    return options;
};

export const toast: Toast = {
    // 一般提示和自定义消息
    info(opt) {
        const options: Record<string, any> = typeof opt === 'object' ? opt : { message: opt };

        if (!options.type) options.type = 'info';

        return ElMessage({
            customClass: `toast-${options.type}`,
            // icon: iconMap[options.type],
            dangerouslyUseHTMLString: true,
            grouping: true,
            ...options,
        });
    },
    // 成功提示
    success(opt) {
        return toast.info(generateOptions('success', opt));
    },
    // 警告提示
    warning(opt) {
        return toast.info(generateOptions('warning', opt));
    },
    // 成功提示
    error(opt) {
        return toast.info(generateOptions('error', opt));
    },
};
