import { ref } from 'vue';

function useMessage() {
  const message = ref('hell');

  const changeMessage = () => {
    message.value = 'hell no';
  };
  return { message, changeMessage };
}

export { useMessage };
