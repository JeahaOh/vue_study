<template>
  <div>
    <TodoHeader :appTitle="title"></TodoHeader>
    <TodoInput @add="addTodoItem"></TodoInput>
    <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
  </div>
</template>
<script>
import { ref } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: { TodoHeader, TodoInput, TodoList },
  data() {
    return {
      title: 'TODO',
    };
  },
  setup() {
    const todoItems = ref([]);

    const fetchTodos = () => {
      const result = [];

      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }

      return result;
    };

    todoItems.value = fetchTodos();

    const addTodoItem = (todo) => {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    };

    const removeTodoItem = (item, idx) => {
      todoItems.value.splice(idx, 1);
      localStorage.removeItem(item);
    };

    return { todoItems, addTodoItem, removeTodoItem };
  },
};
</script>
