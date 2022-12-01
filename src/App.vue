<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style lang="scss">
body {
  font-family: "Noto sans TC";
}
</style>
