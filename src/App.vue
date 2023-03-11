<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Navigation/Header.vue";
import Footer from "@/components/Navigation/Footer.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
