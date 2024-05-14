<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style scoped>
.button {
  color: white;
  padding: 7px 16px;
  border-radius: 5px;
  font-size: 19px;
}
</style>