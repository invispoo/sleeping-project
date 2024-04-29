<template>
  <header>
    <Header/>
  </header>
  <main class="main">
    <v-container fluid>
      <v-row>
        <v-col>
          <h1 class="main__header">Что мы делаем?</h1>
        </v-col>
        <v-col :cols="4">
          <Auth/>
        </v-col>
      </v-row>
    </v-container>
  </main>
  <footer>

  </footer>
</template>

<script setup lang="ts">

import Auth from "~/components/Auth.vue";
import Header from "~/components/Header.vue";
</script>

<style scoped>
.main {
  background-color: #EEE8F6;
  height: 520px;
  width: 100%;
}

.main__header {
  color: #3D52A1;
  font-size: 104px;
}
</style>