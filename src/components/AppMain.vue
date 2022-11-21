<script>

import { store } from '../data/store';

export default {
    name: 'AppMain',
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
        <ul
            v-for="movie in store.filmArray" 
            :key="movie.id"
            >
            <li>
                {{movie.title}} 
                <ul>
                    <li>Titolo Originale: {{movie.original_title}}</li>
                    <li>Lingua Originale: {{movie.original_language}}</li>
                    <li>Voto: {{movie.vote_average}}</li>
                </ul>
            </li>
        </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>