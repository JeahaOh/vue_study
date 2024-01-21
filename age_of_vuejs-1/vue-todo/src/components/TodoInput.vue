<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <CommonModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">warnnig!</h3>
      <div slot="body">nothing can not be insert!</div>
    </CommonModal>
  </div>
</template>
<script>
import CommonModal from "./common/CommonModal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      const text = this.newTodoItem.trim();
      if (text === "") {
        this.showModal = !this.showModal;
        return;
      }

      this.$store.commit("addOneItem", text);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    CommonModal,
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  cursor: pointer;
  float: right;
  background: linear-gradient(to right, #6478fb, #8753fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
