<template>
  <v-window
      v-model="window"
  >
    <v-window-item
        v-for="(question, index) in questions.length"
        :key="question"
        :value="question"
    >
      <v-card
          class="mx-auto px-6 pt-2"
          style="width: 500px;"
          variant="outlined"
      >
        <v-card-text class="d-flex flex-column align-center justify-center">
          <h4 class="pa-6">{{ questions[index].text }}</h4>
          <v-text-field
              :model-value="questions[window - 1].answer"
              @update:model-value="formatAnswer($event)"
              type="number"
              variant="outlined"
              density="compact"
              class="w-75"
          >
            <template #append>
              <v-btn
                  class="auth__ok-button"
                  @click="confirm(index)"
              >
                Подтвердить
              </v-btn>
            </template>
          </v-text-field>
        </v-card-text>
        <v-divider/>
        <v-card-actions class="justify-space-between">
          <v-btn
              icon="mdi-chevron-left"
              variant="plain"
              @click="prev"
          ></v-btn>
          <v-item-group
              v-model="window"
              class="text-center"
              mandatory
          >
            <v-item
                v-for="n in questions.length"
                :key="`btn-${n}`"
                v-slot="{ isSelected, toggle }"
                :value="n"
            >
              <v-btn
                  :variant="isSelected ? 'outlined' : 'text'"
                  icon="mdi-record"
                  @click="toggle"
                  :disabled="!questions[n]?.answer"
              ></v-btn>
            </v-item>
          </v-item-group>
          <v-btn
              icon="mdi-chevron-right"
              variant="plain"
              @click="next"
              :disabled="!questions[window - 1]?.answer"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
const questions = ref([
  {
    text: 'fidhufhd',
    answer: null,
  },
  {
    text: '1111fidhufhd',
    answer: null,
  }
]);

const window = ref(1);

const answer = ref<number | null>(questions.value[window.value - 1]?.answer);

const formatAnswer = (e: number) => {
  if (e >= 0 && e <= 10) {
    questions.value[window.value - 1].answer = e;
  }
  else {
    questions.value[window.value - 1].answer = 0;
  }
};

const next = () => {
  window.value = window.value + 1 > questions.value.length
      ? 1
      : window.value + 1;
};

const prev = () => {
  window.value = window.value - 1 <= 0
      ? questions.value.length
      : window.value - 1
}

const confirm = (index: number) => {
  if (questions.value[index].answer) {
    next();
  }
};
</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/style.scss';
@import '../assets/styles/colors.scss';
</style>