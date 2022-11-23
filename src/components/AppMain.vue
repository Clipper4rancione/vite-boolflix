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
        <h2 class="text-center">{{ title }}</h2>
    <div class="main-wrapper">
        <div class="row d-flex m-auto align-items-center">
            <div class="col-2 movie-col " v-for="card in store[type]" :key="card.id">
                <MovieCard :card="card"/>
            </div>
        </div>
        
        
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2{
font-size: 3rem;
 color: white;
}
.main-wrapper{
    display: flex;
    padding: 10px;
}

</style>