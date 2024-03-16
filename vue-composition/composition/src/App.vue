<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
<script>
import useMessage from './hooks/useMessage.js';

export default {
  setup() {
    const { message, changeMessage } = useMessage();

    return { message, changeMessage };
  },
};
</script>
