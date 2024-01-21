const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == "loglevel:webpack-dev-server") continue;

        let todo = localStorage.getItem(localStorage.key(i));
        todo = JSON.parse(todo);
        console.log("todo", todo);

        arr.push(todo);
      }
    }

    console.log("arr", arr);

    return arr;
  },
};

const state = {
  headerText: "TO DOit!",
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    let todo = {
      completed: false,
      item: todoItem,
    };
    localStorage.setItem(todoItem, JSON.stringify(todo));
    state.todoItems.push(todo);
  },
  removeOneItem(state, { todoItem, index }) {
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
  },
  toggleOneItem(state, { todoItem, index }) {
    state.todoItems[index].completed = !state.todoItems[index].completed;

    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  },
  clearAllItems(state) {
    state.todoItems = [];
    localStorage.clear();
  },
};

export default { state, getters, mutations };
