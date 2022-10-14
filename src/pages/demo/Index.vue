<script setup lang="ts">
import { toast } from '@/utils/toast';

const state = reactive({
    // toast列表
    toast_list: [
        {
            type: 'info',
            fn: 'info',
        },
        {
            type: 'warning',
            fn: 'warning',
        },
        {
            type: 'success',
            fn: 'success',
        },
        {
            type: 'danger',
            fn: 'error',
        },
    ],
});
</script>

<template>
    <section class="flex-col-center items-center p20">
        <h2 class="mb10">
            Toast-Demo
        </h2>
        <ul>
            <el-button
                v-for="item in state.toast_list"
                :key="item.type"
                :type="item.type"
                class="text-capitalize"
                @click="toast[item.fn](item.fn)"
            >
                {{ item.fn }}
            </el-button>
        </ul>
    </section>
</template>
