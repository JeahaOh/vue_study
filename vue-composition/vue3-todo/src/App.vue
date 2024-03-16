<template>
  <div>
    <TodoHeader :appTitle="title"></TodoHeader>
    <TodoInput @add="addTodoItem"></TodoInput>
    <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
  </div>
</template>
<script>
import { onBeforeMount, onMounted, onUnmounted } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodo } from './hooks/useTodo.js';

export default {
  components: { TodoHeader, TodoInput, TodoList },
  data() {
    return {
      title: 'TODO',
    };
  },
  setup() {
    console.log('setup called');

    const { todoItems, fetchTodos, addTodoItem, removeTodoItem } = useTodo();

    onBeforeMount(() => {
      console.log('onBeforeMount called');
      todoItems.value = fetchTodos();
    });

    onMounted(() => {
      console.log('onMounted called');
    });

    onUnmounted(() => {
      console.log('onUnmounted called');
    });

    return { todoItems, addTodoItem, removeTodoItem };
  },
};
</script>
