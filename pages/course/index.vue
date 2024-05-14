<template>
  <v-sheet
      class="mx-auto mt-10"
  >
    <v-slide-group
        show-arrows
    >
      <v-slide-group-item
          v-for="n in 30"
          :key="n"
          v-slot="{ isSelected, toggle }"
      >
        <v-card :class="isSelected ? 'course__card_selected' : undefined"
                class="ma-2 mt-6 text-center"
                rounded
                @click="toggle"
                width="400"
                height="400"
        >
          <v-card-title class="course__card-title">
            день {{ n }}
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center h-75">
            <NuxtLink :to="`/course/day_${n}`">
              <v-btn class="course__card-btn">
                перейти ко дню
              </v-btn>
            </NuxtLink>
          </v-card-text>

          <!--<img
              v-if="n === 1"
              height="230"
              width="300"
              src="../assets/images/1.jpg"
          >
          <img
              v-if="n === 2"
              height="220"
              width="300"
              src="../assets/images/2.jpg"
          >-->
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup lang="ts">
const length = 3;
const onboarding = ref(0);
</script>

<style
    scoped
    lang="scss"
>
@import '../../assets/styles/style';
@import '../../assets/styles/colors';

.course__card {
  &_selected {
    color: white;
    background-color: $violet;
  }
}

.course__card-btn {
  background-color: $pink;
  color: white;
}
</style>