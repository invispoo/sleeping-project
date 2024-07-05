<template>
  <v-container>
    <h1 class="mb-5">Статистика</h1>
    <v-row>
        <v-col>
          <LinearChart :data="[4, 3, 5, 4, 7, 6, 8, 8]" label="Количество часов сна"/>
        </v-col>
    </v-row>

    <v-row>
      <v-col>
        <LinearChart :data="[0, 1, 0, 0, 2, 1, 2, 2]" label="Достаточность сна" alt-labels/>
      </v-col>
      <v-col>
        <LinearChart :data="[3, 2, 2, 1, 0, 1, 1, 0]" label="Чувство усталости" alt-labels/>
      </v-col>
      <v-col>
        <LinearChart :data="[3, 5, 2, 6, 7, 7, 9, 10]" label="Качество сна"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <LinearChart :data="[3, 3, 2, 1, 2, 1, 0, 0]" label="Сложности с засыпанием" alt-labels/>
      </v-col>
      <v-col>
        <LinearChart :data="[2, 3, 2, 0, 1, 0, 1, 0]" label="Ночное пробуждение" alt-labels/>
      </v-col>
      <v-col>
        <LinearChart :data="[3, 3, 2, 2, 1, 0, 1, 0]" label="Пользование электронными устройствами" alt-labels/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <LinearChart :data="[0, 0, 2, 1, 3, 2, 3, 3]" label="Наличие вечерней рутины" alt-labels/>
      </v-col>
      <v-col>
        <LinearChart :data="[2, 1, 0, 0, 0, 0, 1, 0]" label="Потребление кофеина" alt-labels/>
      </v-col>
      <v-col>
        <LinearChart :data="[0, 0, 2, 1, 2, 3, 2, 2]" label="Чувство бодрости после сна" alt-labels/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import axiosApiInstance from "~/api/axiosApiInstance";

console.log(await axiosApiInstance.get('users/'));
</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/style.scss';
@import '../assets/styles/colors.scss';

</style>