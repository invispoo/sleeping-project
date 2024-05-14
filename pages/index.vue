<template>
  <main class="main d-flex align-center">
    <v-container fluid>
      <h1 class="main__header">
        Хотите <span class="main__header_crossed">стать</span> спать лучше?
        <br>
        Мы можем помочь.
      </h1>
      <p>
        Мы не знаем, есть ли жизни после смерти. Но после хорошего сна она есть точно.
      </p>
      <div class="mt-8">
        <NuxtLink to="/auth/signUp">
          <v-btn class="main__reg-button">зарегистрироваться</v-btn>
        </NuxtLink>
        <NuxtLink to="/auth/signIn">
          <v-btn class="main__enter-button">войти</v-btn>
        </NuxtLink>
      </div>
    </v-container>
  </main>
</template>

<script setup lang="ts">
import AppButton from "~/components/AppButton.vue";
</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/style.scss';
@import '../assets/styles/colors.scss';

.main {
  background-color: white;
  height: 570px;
  width: 100%;
  margin: -50px 20px 0;

  &__header {
    color: #977FF5;
    font-size: 84px;
    line-height: 1;
    margin-bottom: 10px;

    &_crossed {
      text-decoration: line-through;
    }
  }

  &__enter-button {
    color: white;
    background-color: $yellow;
    margin-left: 15px;
  }

  &__reg-button {
    color: white;
    background-color: $pink;
  }
}
</style>