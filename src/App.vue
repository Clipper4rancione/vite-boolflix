<script>

// Axios
import axios from 'axios';
// Store
import { store } from './data/store';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  data(){
    return{
      store,
    }
  },
  components:{
    AppHeader,
    AppMain
  },
  methods:{
    getMovie(type){
      axios.get(store.apiUrl + type, { params: store.apiParamas})
      .then( result => {
        console.log(result.data.results);
      })
      .catch( error => {
        console.log(error);
      })
    },
  },
  mounted(){
    this.getMovie('movie')
    this.getMovie('tv')
  }
}
</script>

<template>
  <AppHeader @startSearch="getMovie()" />
  <AppMain title="Film"/>
  <AppMain title="Serie TV"/>
  <AppMain />
</template>


<style lang="scss">
  @use './styles/general'
</style>