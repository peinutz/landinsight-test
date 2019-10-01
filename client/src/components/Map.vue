<template >
  <div class="container">
    <h2>LandInsight Test</h2>
    <div class="box">
      <Square v-for="(square, index) in grid" v-bind:key="index" />
    </div>
  </div>
</template>

<script>
import Square from "./Square";
export default {
  name: "Map",
  components: {
    Square
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
    }
  },
  methods: {
    generateGrid() {
      let grid = [];
      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          grid.push({ x: i, y: j });
        }
      }
      return grid;
    },
    findHouseData(x, y) {
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
