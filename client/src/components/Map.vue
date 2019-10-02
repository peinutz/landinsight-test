<template >
  <div class="container">
    <div class="box">
      <House
        v-for="(square, index) in grid"
        v-bind:key="index"
        :house="findHouseDataInPriceMap(square.x, square.y)"
        :x="square.x"
        :y="square.y"
      />
    </div>
  </div>
</template>

<script>
import House from "./House";
export default {
  name: "Map",
  components: {
    House
  },
  data: function() {
    return {
      grid: []
    };
  },
  props: {
    priceMap: {
      type: Array,
      default: () => []
    },
    x: Number,
    y: Number
  },
  methods: {
    generateGrid() {
      let grid = [];
      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          grid.push({ x: j, y: i });
        }
      }
      return grid;
    },
    findHouseDataInPriceMap(x, y) {
      return this.priceMap.find(house => house.x === x && house.y === y);
    }
  },
  created() {
    this.grid = this.generateGrid();
  }
};
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
}
</style>
