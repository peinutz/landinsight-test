<template>
  <div id="app">
    <div class="container">
      <h2>LandInsight Test</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="error">Ooops something went wrong!</div>
        <Map v-else :priceMap="priceMap" />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    Map
  },
  data() {
    return {
      priceMap: [],
      loading: true,
      error: false
    };
  },
  methods: {
    async fetchPriceMap() {
      try {
        const response = await axios.get("/api/getHousePrices");
        this.priceMap = response.data;
        this.loading = false;
      } catch (err) {
        this.error = true;
      }
    }
  },
  created() {
    this.fetchPriceMap();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  margin: auto;
  width: 500px;
  height: 500px;
}
</style>
