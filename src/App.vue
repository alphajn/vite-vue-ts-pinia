<script setup lang="ts">
import { getCurrentLocale } from '@/lang/element';

const { locale } = useI18n();

// 当前element对应语言的语言包
const elLocale = computed(() => getCurrentLocale(locale.value));
</script>

<template>
    <el-config-provider :locale="elLocale">
        <router-view />
    </el-config-provider>
</template>

<style lang="scss">
@import "@/assets/styles/entry";
</style>
