<template>
  <v-card
      class="mx-auto"
      style="max-width: 400px;"
  >
    <v-toolbar
        color="#3D52A0"
        cards
        dark
        flat
    >
      <v-card-title class="text-h6 font-weight-regular">
        {{ mode === 'signIn' ? 'Вход' : 'Регистрация' }}
      </v-card-title>
    </v-toolbar>
    <v-form
        ref="form"
        v-model="isValid"
        class="pa-3 pt-4"
    >
      <span class="pl-1">Логин</span>
      <v-text-field
          v-model="login"
          :rules="mode === 'signUp' ? [rules.length(3)] : [rules.required]"
          color="deep-purple"
          type="text"
          variant="outlined"
          density="compact"
      />

      <div v-if="mode === 'signUp'">
        <span class="pl-1">Почта</span>
        <v-text-field
            v-model="email"
            :rules="[rules.email]"
            color="deep-purple"
            type="email"
            variant="outlined"
            density="compact"
        />
      </div>

      <span class="pl-1">Пароль</span>
      <v-text-field
          v-model="password"
          :rules="mode === 'signUp' ? [rules.password, rules.length(6)] : [rules.required]"
          color="deep-purple"
          counter="6"
          type="password"
          variant="outlined"
          density="compact"
      />
      <h5
          v-if="mode === 'signUp'"
          class="auth__link mr-1"
      >
        Уже есть аккаунт?
        <a
            class="auth__link"
            @click="mode = 'signIn'"
        >
          Войти
        </a>
      </h5>
      <h5
          v-else
          class="auth__link mr-1"
      >
        Еще не зарегистрированы?
        <a
            class="auth__link"
            @click="mode = 'signUp'"
        >
          Создать аккаунт
        </a>
      </h5>
    </v-form>
    <v-divider/>
    <v-card-actions>
      <v-btn
          variant="text"
          @click="form.reset()"
      >
        Очистить
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          :disabled="!isValid"
          :loading="isLoading"
          color="#8697C4"
      >
        Подтвердить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const mode = ref('signUp');

const login = ref(undefined);
const email = ref(undefined);
const password = ref(undefined);

const isValid = ref(false);
const isLoading = ref(false);

const form = ref();

const rules = reactive({
  /* TODO: Добавить точку и домен возможно */
  email: v => !!(v || '').match(/@/) || 'Пожалуйста, введите корректный адрес почты',
  length: len => v => (v || '').length >= len || `Количество символов должно быть не менее ${len}`,
  password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      'Пароль должен содержать заглавные буквы, цифры и специальные символы',
  required: v => !!v || 'Это поле является обязательным',
});
</script>

<style scoped>
.auth__link {
  text-align: end;
  color: #7784BC;
}

.auth__link a {
  text-decoration: underline;
}
</style>