<template>
  <div>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <option value="">select city</option>
      <option
        v-for="city in cityList"
        :key="city.cityCode"
        :value="city.cityCode"
      >
        {{ city.title }}
      </option>
    </select>
    <br />
    <select name="" id="">
      <option
        v-for="dong in selectedDongList"
        :key="dong.dongCode"
        :value="dong.dongCode"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: 'seoul' },
        { cityCode: '031', title: 'gg' },
        { cityCode: '064', title: 'jeju' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: 'seoul 1 dong' },
        { cityCode: '02', dongCode: '2', dongTitle: 'seoul 2 dong' },
        { cityCode: '02', dongCode: '3', dongTitle: 'seoul 3 dong' },
        { cityCode: '02', dongCode: '4', dongTitle: 'seoul 4 dong' },
        { cityCode: '064', dongCode: '1', dongTitle: 'jeju 1 dong' },
        { cityCode: '064', dongCode: '2', dongTitle: 'jeju 2 dong' },
        { cityCode: '064', dongCode: '3', dongTitle: 'jeju 3 dong' },
        { cityCode: '064', dongCode: '4', dongTitle: 'jeju 4 dong' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity() {
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>
