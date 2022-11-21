import { reactive } from "vue";

export const store = reactive({
    
    apiUrlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=76150228acfafd99a70e6ef719d67680',
    filmArray: [],
    textSearch: 'matrix',

})