<template>
  <div>
    <div>
      <select name="" id="">
        <option v-for="city in cities" :key="city.code" :value="city.code">
          {{ city.title }}
        </option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(drink, i) in drinkList" :key="i">
            <td>{{ i }}</td>
            <td>{{ drinkList[i].drinkName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="drink in drinkList" :key="drink.drinkId">
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td>
              <input type="number" name="" id="" v-model="drink.qty" />
            </td>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '경기', code: '031' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        { drinkId: '1', drinkName: 'cola', price: 500, qty: 1 },
        { drinkId: '2', drinkName: 'orange', price: 1200, qty: 1 },
        { drinkId: '3', drinkName: 'coffe', price: 500, qty: 1 },
        { drinkId: '4', drinkName: 'water', price: 200, qty: 1 },
        { drinkId: '5', drinkName: 'borry', price: 1200, qty: 1 },
        { drinkId: '6', drinkName: 'pocari', price: 1000, qty: 1 },
        { drinkId: '7', drinkName: 'pororo', price: 1300, qty: 1 }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
