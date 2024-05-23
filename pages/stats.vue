<template>
  <v-row>
    <v-col>
      <LinearChart :labels="monthDays()" :data="[5, 6, 5, 4, 7, 8, 7, 8]" label="Количество часов сна"/>
    </v-col>
    <v-col>
      <LinearChart :labels="monthDays()" :data="[5, 6, 5, 4, 7, 8, 7, 8]" label="Достаточность сна"/>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <LinearChart :labels="monthDays()" :data="[5, 6, 5, 4, 7, 8, 7, 8]" label="Чувство усталости"/>
    </v-col>
    <v-col>
      <LinearChart :labels="monthDays()" :data="[5, 6, 5, 4, 7, 8, 7, 8]" label="Качество сна"/>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <LinearChart/>
    </v-col>
    <v-col>
      <LinearChart/>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <LinearChart/>
    </v-col>
    <v-col>
      <LinearChart/>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <LinearChart/>
    </v-col>
    <v-col>
      <LinearChart/>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const monthDays = () => {
  let arr = [];
  for (let i = 0; i < 31; i++) {
    arr[i] = `${i}`;
  }
  console.log(arr);
  return arr;
}

const answers = ['', '', '', '',]
</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/style.scss';
@import '../assets/styles/colors.scss';

</style>