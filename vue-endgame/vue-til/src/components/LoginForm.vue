<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">username : </label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">password : </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!isUsernameValid || !password"
        >
          Log In
        </button>
      </form>
      <p>{{ logMessage }}</p>
    </div>
  </div>
</template>
<script>
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

        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
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
  created() {
    this.$store.dispatch('LOGOUT');
  },
};
</script>
<style>
.btn {
  color: white;
}
</style>
