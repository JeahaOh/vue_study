<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: '잠 온다',
      arr: [],
      abj: {}
    }
  }
}
</script>
<style scoped>
.text-red {
  color: red;
}
</style>
