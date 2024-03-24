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
    <div>
      <label for="nickname">nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">Sign Up</button>
    <p>{{ logMessage }}</p>
  </form>
</template>
<script>
import { registerUser } from '@/api/index.js';
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
};
</script>
