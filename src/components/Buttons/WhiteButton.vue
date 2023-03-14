<script setup>
const props = defineProps(['text'])
</script>

<template>
  <button class="btn-white text-[16px] leading-[24px] text-black py-[12px] px-[16px] bg-white capitalize hover:scale-105 transition-all duration-150 ease-in-out">{{ text }}</button>
</template>

<style scoped>
.btn-white {
  border: 1px solid rgba(47, 43, 67, 0.1);
  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 12px;
}
</style>
