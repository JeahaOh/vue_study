<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  // data() {
  //   return {
  //     message: 'hell',
  //   };
  // },
  // methods: {
  //   changeMessage() {
  //     this.message = 'hell no';
  //   },
  // },
  setup() {
    const message = ref('hell');

    const changeMessage = () => {
      message.value = 'hell no';
    };
    return { message, changeMessage };
  },
};
</script>
