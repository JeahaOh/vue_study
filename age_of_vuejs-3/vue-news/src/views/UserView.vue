<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :userInfo="fetchedUser">
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="time">{{ 'Joined' + fetchedUser.created }}, </span>
      <span slot="karma">{{ fetchedUser.karma }} </span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId);
  },
};
</script>

<style scoped>
.container {
}
</style>
