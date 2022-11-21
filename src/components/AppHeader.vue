<script>
import { store } from '../data/store';


export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <div class="row">
                        <div class="col-2">
                            <img src="/public/logo-boolflix.png" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="search-area">
                    <div class="row d-flex">
                        <div class="col-10">
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Cerca Titoli..."
                                v-model="store.textSearch"
                                >
                        </div>
                        <div class="col-2">
                            <div @click="$emit('startSearch')" class="button btn btn-danger">
                                Cerca
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: #0f0f0f;
    }
    .header-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;

        .logo {
            width: 100%;
            display: flex;

            img {
                vertical-align: middle;
                width: 100%;
            }
        }
    }
</style>