<template>
  <div class="home">
    <!-- featrued game  -->

    <Category @onCategorySelected="selectedCategoryHandeler" />
    <!-- <Breakpoints/> -->
    <div class="home-container">
      <!-- selected category -->
      <Wrapper
        v-show="showSelectedGategory"
        :title="'Selected Category'"
        :games="data"
      />

      <Featured :game="data[0]" v-if="data.length>0"/>

      <!-- Most Recommendation  -->
      <Wrapper :title="'Most Recommendation'" :games="data" />

      <!-- Most Populaer  -->
      <Wrapper :title="'Most Popular'" :games="data" />
    </div>
  </div>
</template>

<script>
import Featured from "./games/featured";
import Wrapper from "./games/games-wrapper";
import Category from "./header/category";
import axios from "axios";

export default {
  data() {
    return {
      showSelectedGategory: false,
      data: []
    };
  },
  name: "Home",
  props: {
    msg: String,

  },
  components: {
    Featured,
    Wrapper,
    Category,
  },
  methods: {
    selectedCategoryHandeler(flage) {
      this.showSelectedGategory = !!flage;
    },
  }
  ,
  watch:{
    '$store.state.data'(){
      this.data= this.$store.state.data.slice(0,5);
    }
  },
  
 async created(){
    this.data= this.$store.state.data.slice(0,5);


  }
};
</script>
<style scoped>
.home {
  width: 100%;
}
.home-container {
  width: 90%;
  margin: auto;
  padding-top: 10px;
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
}
@media screen and (min-width: 1200px) {
  .home {
    width: 100%;
  }
  .home-container {
    width: 50%;
    margin: auto;
    padding-top: 30px;
  }
}
</style>
