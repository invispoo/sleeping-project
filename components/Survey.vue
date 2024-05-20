<template>
  <v-window
      v-model="window"
  >
    <v-window-item
        v-for="(question, index) in questions"
        :key="question.key"
        :value="index + 1"
    >
      <v-card
          class="mx-auto px-6 pt-2"
          style="width: 750px;"
          variant="outlined"
      >
        <v-card-title class="text-center">Пожалуйста, ответьте на несколько вопросов</v-card-title>
        <v-card-text class="d-flex flex-column align-center justify-center">
          <h4 class="pa-6">{{ question.text }}</h4>
          <template v-if="question.type === 'input'">
            <v-text-field
                v-model="question.answer"
                type="number"
                variant="outlined"
                density="compact"
                class="w-50"
                :min="0"
                :max="24"
            >
              <template #append>
                <v-btn
                    class="survey__ok-button"
                    @click="confirm(index)"
                    :disabled="!question.answer"
                >
                  Подтвердить
                </v-btn>
              </template>
            </v-text-field>
          </template>

          <template v-else-if="question.type === 'range'">
            <v-text-field
                v-model="question.answer"
                type="number"
                variant="outlined"
                density="compact"
                class="w-50"
                :min="0"
                :max="10"
            >
              <template #append>
                <v-btn
                    class="survey__ok-button"
                    @click="confirm(index)"
                    :disabled="!question.answer"
                >
                  Подтвердить
                </v-btn>
              </template>
            </v-text-field>
          </template>

          <template v-else-if="question.type === 'select'">
            <v-select
                v-model="question.answer"
                :items="items"
                item-title="title"
                item-value="value"
                variant="outlined"
                density="compact"
                class="w-50"
            >
              <template #append>
                <v-btn
                    class="survey__ok-button"
                    @click="confirm(index)"
                    :disabled="!question.answer"
                >
                  Подтвердить
                </v-btn>
              </template>
            </v-select>
          </template>
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
                  :disabled="!questions[n - 1]?.answer"
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
const questions = reactive([
  {
    text: 'Сколько часов в день вы спите?',
    answer: null,
    type: 'input',
    key: 'hours'
  },
  {
    text: 'Вы спите достаточно?',
    answer: null,
    type: 'select',
    key: 'enoughSleep'
  },
  {
    text: 'Часто ли вы чувствуете себя уставшим?',
    answer: null,
    type: 'select',
    key: 'tiredness'
  },
  {
    text: 'Как бы вы оценили качество своего сна? (0 - 10)',
    answer: null,
    type: 'range',
    key: 'quality'
  },
  {
    text: 'Бывает ли вам сложно заснуть?',
    answer: null,
    type: 'select',
    key: 'fallingAsleep'
  },
  {
    text: 'Часто ли вы просыпаетесь ночью?',
    answer: null,
    type: 'select',
    key: 'nightWaking'
  },
  {
    text: 'Пользуется ли вы электронными устройствами перед сном?',
    answer: null,
    type: 'select',
    key: 'electronicDevices'
  },
  {
    text: 'Есть ли у вас постоянная вечерняя рутина?',
    answer: null,
    type: 'select',
    key: 'routine'
  },
  {
    text: 'Потребляете ли вы кофеин перед сном?',
    answer: null,
    type: 'select',
    key: 'caffeine'
  },
  {
    text: 'Вы чувствуете себя выспавшимся после пробуждения?',
    answer: null,
    type: 'select',
    key: 'refreshed'
  },
]);

const window = ref(1);

const next = () => {
  window.value = window.value + 1 > questions.length
      ? 1
      : window.value + 1;
};

const prev = () => {
  window.value = window.value - 1 <= 0
      ? questions.length
      : window.value - 1
}

const confirm = (index: number) => {
  if (index === questions.length - 1) {
    return navigateTo({
      path: '/course',
    });
  }
  if (questions[index].answer) {
    next();
  }
};

const items = [
  {
    title: 'да',
    value: '3',
  },
  {
    title: 'нет',
    value: '0',
  },
  {
    title: 'может быть',
    value: '1',
  },
  {
    title: 'часто',
    value: '2',
  },
];
</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/style.scss';
@import '../assets/styles/colors.scss';
</style>