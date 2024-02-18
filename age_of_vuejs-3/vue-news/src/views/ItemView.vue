<template>
  <div>
    <section class="header-container">
      <user-profile :userInfo="fetchedItem">
        <div slot="username">{{ fetchedItem.user }}</div>
        <template slot="time">{{ 'Posted ' + fetchedItem.tiem_ago }}</template>
      </user-profile>
    </section>

    <section>
      <h2>{{ userQuestion }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content" class="content"></div>
    </section>
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
    ...mapGetters(['fetchedItem']),
    userQuestion() {
      return this.fetchedItem.title;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
