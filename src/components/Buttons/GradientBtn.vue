<script setup>
const props = defineProps(['text'])
</script>

<template>
  <button class="btn text-white">{{ text }}</button>
</template>

<style scoped>
.btn {
    padding: 10px 18px;
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
</style>
