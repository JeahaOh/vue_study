<template>
  <div>
    <div style="color: red; font-size: 30px">
      스타일 바인딩 -> 색 : red, 폰트 크기 : 30px
    </div>
    <div :style="style1">
      스타일 바인딩 -> 색 : {{ colorName }}, 폰트 크기 : 30px
    </div>
    <button @click="click">change</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      colorName: 'green',
      style1: {
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    click() {
      this.colorName = 'blue'
      this.style1.color = 'blue'
    }
  }
}
</script>
