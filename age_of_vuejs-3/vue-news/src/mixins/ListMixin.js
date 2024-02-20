import bus from '@/utils/bus';
export default {
  created() {
    bus.$emit('start:spinner');

    this.$store
      .dispatch('FETCH_LSIT', this.$route.name)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
