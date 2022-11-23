import { reactive } from "vue";

export const store = reactive({
    
    apiUrl: 'https://api.themoviedb.org/3/search/',
    apiParams:{
        api_key: '76150228acfafd99a70e6ef719d67680',
        query: '',
        language: 'it-IT'
    },
    movie: [],
    tv: [],
    textSearch: '',

})