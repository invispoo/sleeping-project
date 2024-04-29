<template>
  <v-toolbar class="toolbar pl-4 pr-2">
    <v-icon
        class="toolbar__logo-icon"
        icon="mdi-weather-night"
        size="x-large"
    />
    <v-toolbar-title class="toolbar__title ml-1">
      sleeping project
    </v-toolbar-title>
    <v-spacer/>
    <v-btn
        icon="mdi-cog"
        size="large"
        color="white"
    />
  </v-toolbar>
</template>

<script setup lang="ts">

</script>

<style
    scoped
    lang="scss"
>
.toolbar {
  background-color: #8697C3;

  &__logo-icon {
    color: white;
  }

  &__title {
    color: white;
    font-size: 22px;
    font-weight: bold;
    font-style: italic;

  }
}
</style>