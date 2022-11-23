<script>

import { store } from '../data/store';
import MovieCard from './MovieCard.vue';
export default {
    name: 'AppMain',
    components:{
        MovieCard,
    },
    props:{
        title: String,
        type: String
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
  <div class="container">
    <div class="main-wrapper">
        <h2>{{ title }}</h2>

        <MovieCard :card="card" v-for="card in store[type]" :key="card.id"/>
        
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>