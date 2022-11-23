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
      axios.get(store.apiUrl + type, { params: store.apiParams})
      .then( result => {
        store[type] = result.data.results
        console.log(result.data.results);
      })
      .catch( error => {
        console.log(error);
      })
    },
    search(){
      this.getMovie('movie');
      this.getMovie('tv');
    }
  },
  mounted(){
    
  }
}
</script>

<template>
  <AppHeader @startSearch="search()" />
  <AppMain v-if="store.movie.length > 0" title="Film" type="movie"/>
  <AppMain v-if="store.tv.length > 0" title="Serie TV" type="tv"/>
</template>


<style lang="scss">
  @use './styles/general'
</style>