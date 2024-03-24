<template>
  <header>
    <router-link to="/signup">signup</router-link> |
    <router-link to="/login">login</router-link>
  </header>
</template>
<script>
export default {};
</script>

<style>
header {
  padding: 30px;
}

header a {
  font-weight: bold;
  color: #2c3e50;
}

header a.router-link-exact-active {
  color: #42b983;
}
</style>
