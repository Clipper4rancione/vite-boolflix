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
  <div class="container mt-5">
        <h2>{{ title }}</h2>
    <div class="main-wrapper">
        <div class="row">
            <div class="col-3 movie-col py-3" v-for="card in store[type]" :key="card.id">
                <MovieCard :card="card"/>
            </div>
        </div>
        
        
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2{
 color: white;
}
.main-wrapper{
    display: flex;
    padding: 10px;
}

</style>