<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">TITLE : </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">CONTENTS : </label>
          <textarea id="contents" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">EDIT</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>
<script>
import { fetchPost, editPost } from '@/api/posts.js';

export default {
  components: {},
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      console.group('submitForm');
      try {
        console.log(this.title, this.contents);

        const id = this.$route.params.id;

        const response = await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        console.log('response : ', response);

        this.$router.push('/main');
      } catch (error) {
        console.log('error', error);
        this.logMessage = error.response.data.message;
      } finally {
        console.groupEnd('submitForm');
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);

    this.title = data.title;
    this.contents = data.contents;

    console.log('data', data);
  },
};
</script>
<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
