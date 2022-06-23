<script setup lang="ts">
import { useTestStore } from '@/store/test';

const { t } = useI18n();
const store = useTestStore();
const { size } = storeToRefs(store);
const { name } = store;
store.size = '20px';
store.$reset();

setTimeout(() => {
    store.size = '100px';
    store.name = 'update-name';
}, 500);
</script>

<template>
    <section class="flex-col-center flex-items-center font-bold">
        {{ t('title') }}
        <p>{{ store.name }}</p>
        <p>{{ name }}</p>
        <p>{{ store.size }}</p>
        <p>{{ size }}</p>
    </section>
</template>

<style lang="scss" scoped>
section {
    color: red;
}
</style>
