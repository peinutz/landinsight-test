<template >
  <div class="house" v-bind:style="{backgroundColor: color}"></div>
</template>

<script>
const colorMap = [
  {
    percentile: 5,
    color: "rgb(217,217,217)"
  },
  {
    percentile: 25,
    color: "rgb(191,191,191)"
  },
  {
    percentile: 75,
    color: "rgb(153,153,153)"
  },
  {
    percentile: 95,
    color: "rgb(89,89,89)"
  },
  {
    percentile: 100,
    color: "rgb(38,38,38)"
  }
];
export default {
  name: "House",
  props: {
    house: Object,
    default: undefined
  },
  computed: {
    color() {
      const house = this.house;
      if (house === undefined) {
        return "#f2f2f2";
      }
      const color = colorMap.find(map => house.percentile <= map.percentile)
        .color;
      return color;
    }
  }
};
</script>

<style scoped>
.house {
  width: 5px;
  height: 5px;
}
</style>
