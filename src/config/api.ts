/**
 * @file 统一操作 API
 *
 * @example
 *
 *  - import { $api } from '@/utils/api';
 *  - $api.getDemo
 */

import axios from '@/utils/axios';

export const $api = {
    getDemo() {
        return axios.get('@api/demo');
    },
};
