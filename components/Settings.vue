<template>
  <article>
    <v-container>
      <h1 class="pb-5" style="font-size: 32px">Настройки</h1>
      <v-row>
        <v-col>
          <v-form v-model="isLoginValid">
            <h3>Сменить логин</h3>
            <p class="pb-2">Введите новый логин</p>
            <div class="d-flex mb-5">
              <v-text-field
                  v-model="login"
                  density="compact"
                  variant="outlined"
                  class="mr-3"
                  :rules="[rules.length(3)]"
              />
              <v-btn class="settings__button_violet" :disabled="!isLoginValid">
                Подтвердить
              </v-btn>
            </div>
          </v-form>

          <v-form v-model="isOldPasswordValid">
            <h3>Сменить пароль</h3>
            <p class="pb-2">Введите старый пароль</p>
            <div class="d-flex">
              <v-text-field
                  density="compact"
                  variant="outlined"
                  class="mr-3"
                  type="password"
                  :rules="[rules.oldPassword]"
              />
              <v-btn class="settings__button_yellow" :disabled="!isOldPasswordValid">
                Подтвердить
              </v-btn>
            </div>
          </v-form>

          <v-form v-model="isPasswordValid">
            <p class="pb-2">Введите новый пароль</p>
            <div class="d-flex mb-5">
              <v-text-field
                  density="compact"
                  variant="outlined"
                  class="mr-3"
                  type="password"
                  :rules="[rules.password]"
              />
              <v-btn class="settings__button_pink" :disabled="!isPasswordValid">
                Подтвердить
              </v-btn>
            </div>
          </v-form>
        </v-col>
        <v-col>
          <div class="d-flex align-center">
            <div class="d-block ml-4">
              <h3 class="pb-1">Хотите начать сначала? Вы можете <i>сбросить</i> свой прогресс.</h3>
              <p>Осторожно, это действие нельзя будет отменить.</p>
            </div>

            <v-btn class="settings__button">
              Сбросить прогресс
            </v-btn>
          </div>

          <v-card
            variant="outlined"
            class="mt-5 mx-4"
            height="210"
          >
            <v-card-title>Решили остаться с нами?</v-card-title>
            <v-card-text>
              <h3 class="py-3">Здесь вы можете внести оплату за курс.</h3>
              <v-text-field
                density="compact"
                variant="outlined"
                placeholder="Введите ваш номер карты"
                hide-details
                append-inner-icon="mdi-credit-card"
              />
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
              <v-btn class="settings__button_white">
                Оплатить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </article>
</template>

<script setup lang="ts">
const login = ref();
const oldPassword = ref('111111');

const isLoginValid = ref(false);
const isOldPasswordValid = ref(false);
const isPasswordValid = ref(false);

const rules = reactive({
  /* TODO: Добавить точку и домен возможно */
  email: (v: string) => !!(v || '').match(/@/) || 'Пожалуйста, введите корректный адрес почты (должен включать @)',
  length: (len: number) => (v: string) => (v || '').length >= len || `Количество символов должно быть не менее ${len}`,
  oldPassword: (v: string) => v === oldPassword.value || `Старый пароль не верен`,
  password: (v: string) => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      'Пароль должен содержать заглавные буквы, цифры и специальные символы',
  required: (v: string) => !!v || 'Это поле является обязательным',
});
</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/colors';
@import '../assets/styles/style';

.settings__button_violet {
  background-color: $violet;
  color: white;
}

.settings__button_yellow {
  background-color: $yellow;
  color: white;
}

.settings__button_pink {
  background-color: $pink;
  color: white;
}

.settings__button_white {
  background-color: white;
  color: $violet;
}
</style>