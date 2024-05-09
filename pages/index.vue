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
    </v-container>
  </main>
</template>

<script setup lang="ts">
import ListItemIcon from "~/components/ListItemIcon.vue";
</script>

<style scoped>
@import '../assets/styles/style.scss';

.main {
  background-color: white;
  height: 570px;
  width: 100%;
  margin: -50px 20px 0;
}

.main__header {
  color: #3D52A1;
  font-size: 84px;
  line-height: 1;
  margin-bottom: 10px;
}

.main__header_crossed {
  text-decoration: line-through;
}
</style>