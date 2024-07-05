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
      <NuxtLink
          to="/course"
          class="toolbar__link"
      >
        курc
      </NuxtLink>
      <NuxtLink
          to="/stats"
          class="toolbar__link"
      >
        статистика
      </NuxtLink>
      <!--<NuxtLink
          to="/"
          class="toolbar__link"
      >

      </NuxtLink>-->
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