<template>
  <v-card
      class="mx-auto px-6 pt-2"
      style="width: 500px;"
      variant="outlined"
  >

      <v-card-title class="auth__card-title">
        {{ mode === 'signIn' ? 'вход' : 'регистрация' }}
      </v-card-title>

    <v-form
        ref="form"
        v-model="isValid"
        class="px-3 pt-6 pb-10"
    >
      <span class="pl-1">логин</span>
      <v-text-field
          v-model="login"
          :rules="mode === 'signUp' ? [rules.length(3)] : [rules.required]"
          color="black"
          type="text"
          variant="outlined"
          density="compact"
      />

      <div v-if="mode === 'signUp'">
        <span class="pl-1">почта</span>
        <v-text-field
            v-model="email"
            :rules="[rules.email]"
            color="black"
            type="email"
            variant="outlined"
            density="compact"
        />
      </div>

      <span class="pl-1">пароль</span>
      <v-text-field
          v-model="password"
          :rules="mode === 'signUp' ? [rules.password, rules.length(6)] : [rules.required]"
          color="black"
          :counter="mode === 'signUp' ? 6 : false"
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
          @click="processAuth"
          class="auth__ok-button"
      >
        Подтвердить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  mode: string;
}

const props = defineProps<Props>();

const mode = ref(props.mode);

const login = ref<string | undefined>(undefined);
const email = ref<string | undefined>(undefined);
const password = ref<string | undefined>(undefined);

const isValid = ref(false);
const isLoading = ref(false);

const form = ref();

const rules = reactive({
  /* TODO: Добавить точку и домен возможно */
  email: (v: string) => !!(v || '').match(/@/) || 'Пожалуйста, введите корректный адрес почты (должен включать @)',
  length: (len: number) => (v: string) => (v || '').length >= len || `Количество символов должно быть не менее ${len}`,
  password: (v: string) => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      'Пароль должен содержать заглавные буквы, цифры и специальные символы',
  required: (v: string) => !!v || 'Это поле является обязательным',
});

const processAuth = () => {
  if (mode.value === 'signUp') {
    console.log(`Account added to DB ${login.value} ${email.value} ${password.value}`);
    return navigateTo({
      path: '/survey',
    });
  }
  else {
    if (login.value === 'a' && password.value === 'b') {
      console.log(`User entered ${login.value} ${password.value}`);
      return navigateTo({
        path: '/course',
      });
    }
  }
};
</script>

<style
    scoped
    lang="scss"
>
@import '../assets/styles/style';
@import '../assets/styles/colors';

.auth__link {
  text-align: end;
  font-size: 14px;
  color: $violet;

  a {
    font-weight: 900;
    text-decoration: underline;
  }
}

.auth__ok-button {
  color: $pink;
}
</style>