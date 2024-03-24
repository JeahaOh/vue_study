<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">username : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">password : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      Log In
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>
<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.group('submitForm');

      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        const { data } = await loginUser(userData);
        console.log(data);
        const username = data.user.username;
        console.log('res.data.username : ', username);

        this.logMessage = `LogIn -> ${username}`;
      } catch (error) {
        console.error('error', error);
        console.error('response', error.response);
        this.logMessage = `${error.response.data}`;
      } finally {
        this.initForm();
        console.groupEnd('submitForm');
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
};
</script>
