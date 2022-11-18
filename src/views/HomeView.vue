<script setup>
import { ref, onMounted } from "vue";
import uploading from "../components/upLoading.vue";
import downLoading from "../components/downLoading.vue";
import singinCanvas from "../components/singinCanvas.vue";
</script>
<template>
  <singinCanvas></singinCanvas>
  <uploading></uploading>
  <downLoading></downLoading>
</template>

<style lang="scss" scoped>
</style>



