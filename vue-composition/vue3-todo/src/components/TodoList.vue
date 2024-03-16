<template>
  <div>
    <ul>
      <li v-for="(item, idx) in todoItems" :key="idx">
        <span>{{ item }}</span>
        <button @click="removeTodo(item, idx)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { watch } from 'vue';
export default {
  props: ['todoItems'],
  setup(props, context) {
    const removeTodo = (item, idx) => {
      context.emit('remove', item, idx);
    };

    // watch는 데이터의 관리가 어렵고, 리소스 사용이 많으니 지양하는 것이 좋음.
    watch(props.todoItems, (newValue) => {
      console.log(newValue);
    });

    return { removeTodo };
  },
};
</script>
