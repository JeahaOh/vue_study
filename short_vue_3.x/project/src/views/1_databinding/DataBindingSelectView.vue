<template>
  <div>
    <select @change="print" v-model="selectedNum">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="031">경기</option>
      <option value="032">인천</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedNum: '02'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    print() {
      console.log(this.selectedNum)
    }
  }
}
</script>
