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
                :color="backgroundColors[n % 3]"
        >
          <v-card-title>
            <span class="course__card_title">день {{ n }}</span>
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center h-75">
            <NuxtLink :to="`/course/day_${n}`">
              <v-btn
                  v-if="n < 7"
                  class="course__card-btn"
                  :style="`background-color: ${buttonColors[n % 3]}`"
              >
                перейти ко дню
              </v-btn>
            </NuxtLink>
            <v-icon
                v-if="n > 6"
                icon="mdi-lock"
                :color="buttonColors[n % 3]"
                style="width: 100px"
                size="x-large"
                @click="feeDialog = true"
            />
          </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  <v-dialog v-model="feeDialog" max-width="500" persistent>
    <v-card
        rounded
        class="d-flex justify-center align-center px-6"
    >
      <v-card-title>Эта часть курса недоступна</v-card-title>
      <v-card-text>Чтобы получить доступ, пожалуйста, внесите оплату в личном кабинете</v-card-text>
      <v-card actions class="my-4">
        <v-btn @click="feeDialog = false" variant="text">Подтвердить</v-btn>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const buttonColors = ['#977FF5', '#EF94D5', '#F0C50B'];
const backgroundColors = ['#F3F1FF', '#FDF3FA', '#FEF8E6'];

const feeDialog = ref(false);
</script>

<style
    scoped
    lang="scss"
>
@import '../../assets/styles/style';
@import '../../assets/styles/colors';

.course__card {
  &_selected {
    color: black;
    background-color: white;
  }
}

.course__card_title {
  color: black;
}

.course__card-btn {
  color: white;
}
</style>