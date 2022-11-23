<script>

import { store } from '../data/store';

export default {
    name: 'AppMain',
    props:{
        title: String
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
        <ul
            v-for="movie in store.filmArray" 
            :key="movie.id"
            >
            <li>
                {{movie.title}} 
                <ul>
                    <li>Titolo Originale: {{movie.original_title}}</li>
                    <li>Lingua Originale: 
                        <span v-if="movie.original_language" :class="'fi fi-' + movie.original_language"></span> 
                        <span v-else>{{movie.original_language}}</span> 
                    </li>
                    <li>Voto: {{movie.vote_average}}</li>
                </ul>
            </li>
        </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>