<template>
  <v-toolbar class="toolbar pl-4 pr-2">
    <!--<v-icon
        class="toolbar__logo-icon"
        icon="mdi-weather-night"
        size="x-large"
    />
    <v-toolbar-title class="toolbar__title ml-1">
      sleepy
    </v-toolbar-title>
    <v-btn
        icon="mdi-cog"
        size="large"
        color="white"
    />-->
    <v-spacer/>
    <span class="toolbar__link">домой</span>
    <span class="toolbar__link">курc</span>
    <span class="toolbar__link">статистика</span>
    <span class="toolbar__link">настройки</span>
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

  &__logo-icon {
    color: $violet;
  }

  &__title {
    color: $violet;
    font-size: 22px;
    font-weight: bold;
    font-style: italic;

  }

  &__link {
    font-size: 20px;
    margin-left: 35px;
  }
}
</style>