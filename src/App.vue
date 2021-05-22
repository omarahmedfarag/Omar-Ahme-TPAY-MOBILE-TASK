<template>
  <Header :close='close'/>
  <router-view @click="test()"></router-view>
</template>

<script>
  import Home from './components/home.vue';
  import Header from './components/header/Header';

export default {
  data(){
    return(
      {
        close:false
      }
    )
  },
  name: 'App',
  components: {
    Home,
    Header,
  },
  methods:{
    test(){
      this.close=!this.close;
    }
  },
  created(){
    this.$store.commit('fetchData');
  }
  
}
</script>

<style>

</style>
