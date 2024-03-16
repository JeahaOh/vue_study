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
export default {
  props: ['todoItems'],
  setup(props, context) {
    const removeTodo = (item, idx) => {
      context.emit('remove', item, idx);
    };

    return { removeTodo };
  },
};
</script>
