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
    getMovie(){
      axios.get(store.apiUrlFilm, {
        params:{
          query: store.textSearch,
        }
      })
      .then( result => {
        console.log(result.data.results);
        store.filmArray = result.data.results;
      })
      .catch( error => {
        store.filmArray = [];
        console.log(error);
      })
    }
  },
  mounted(){
    this.getMovie();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>


<style lang="scss">
  @use './styles/general'
</style>