<template >
  <div class="square" :data-x="x" :data-y="y"></div>
</template>

<script>
export default {
  name: "Square",
  props: {
    x: Number,
    y: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
  width: 5px;
  height: 5px;
  background-color: red;
}
</style>
