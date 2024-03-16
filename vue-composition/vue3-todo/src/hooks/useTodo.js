import { ref } from 'vue';

function useTodo() {
  const todoItems = ref([]);

  const fetchTodos = () => {
    const result = [];

    for (let i = 0; i < localStorage.length; i++) {
      const todoItem = localStorage.key(i);
      result.push(todoItem);
    }

    return result;
  };

  const addTodoItem = (todo) => {
    todoItems.value.push(todo);
    localStorage.setItem(todo, todo);
  };

  const removeTodoItem = (item, idx) => {
    todoItems.value.splice(idx, 1);
    localStorage.removeItem(item);
  };

  return { todoItems, fetchTodos, addTodoItem, removeTodoItem };
}

export { useTodo };
