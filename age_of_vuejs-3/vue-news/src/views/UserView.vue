<template>
  <div>
    <p>
      name :
      {{ fetchedUser.id }}
    </p>
    <p>
      karma :
      {{ fetchedUser.karma }}
    </p>
    <p>
      created :
      {{ fetchedUser.created }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId);
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
};
</script>

<style></style>
