<template>
  <v-toolbar class="toolbar pl-4 pr-6">
    <v-spacer/>
    <nav>
      <NuxtLink
          to="/"
          class="toolbar__link"
      >
        домой
      </NuxtLink>
      <span class="toolbar__link">курc</span>
      <span class="toolbar__link">статистика</span>
      <span class="toolbar__link">настройки</span>
    </nav>
  </v-toolbar>
</template>

<script setup lang="ts">

</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/colors';
@import '../assets/styles/style';

.toolbar {
  background-color: transparent;

  &__link {
    font-size: 20px;
    margin-left: 35px;
    color: black;
    text-decoration: none;
  }
}
</style>