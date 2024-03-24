<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">username : </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">password : </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname : </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!isUsernameValid || !password"
        >
          Sign Up
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>
<script>
import { registerUser } from '@/api/auth.js';
import { validateEmail } from '@/utils/validation.js';

export default {
  components: {},
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async submitForm() {
      console.group('submitForm');

      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };

      const { data } = await registerUser(userData);
      console.log('res.data.username : ', data.username);

      this.logMessage = `Sign Up -> ${data.username}`;

      this.initForm();

      console.groupEnd('submitForm');
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
};
</script>
