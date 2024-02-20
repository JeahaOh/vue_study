import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    name,
    created() {
      bus.$emit('start:spinner');

      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((err) => {
          console.error(err);
        });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
