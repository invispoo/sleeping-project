<template>
  <section class="d-flex justify-center align-center auth">
    <Auth :mode="mode"/>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const mode = ref(route.params.mode);
</script>

<style scoped>
.auth {
  height: 520px;
}
</style>