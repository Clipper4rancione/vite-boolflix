<script>
import StarRating from 'vue-star-rating';

export default {
    name: 'MovieCard',
    props:{
        card: Object,
    },
    components:{
        StarRating
    },
    data(){
        return{
            cardOne: "start"
        }
    }
}
</script>

<template>
    <div class="scene scene--card">
      <div
        class="card"
        @click="cardOne == 'start' ? (cardOne = 'flipped' ) : (cardOne = 'start' )"
        v-bind:class="{ flipme: cardOne == 'flipped' }"
      >
        <div class="card__face card__face--front">
            <img :src="'https://image.tmdb.org/t/p/w300/' + card.poster_path" alt="">
        </div>
        <div class="card__face card__face--back">
            <ul>
                <li>Titolo: <br> {{card.title || card.name}}</li>
                <li>Lingua:</li>
                <li v-if="card.original_language === 'en'" :class="'text-center fi fi-' + 'gb'"></li>
                <li v-else :class="'text-center fi fi-' + card.original_language"></li>
                <li>Voto: <br> {{Math.ceil(card.vote_average)}}</li>
                <li>Overview:</li>
            </ul>
                <div class="container-ow">
                    {{card.overview}}
                </div>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>

ul{
    list-style: none;
    padding-left: 0;
    text-align: center;
    margin-top: 8px;
    
    li{
        margin: 6px 0px;
    }
    i{
        color: white;
    }
}
.container-ow{
    width: 100%;
    height: 37%;
    padding: 5px;
    overflow: auto;
}



//FLIP CARD
.scene {
  width: 200px;
  height: 360px;
  margin: 30px 0;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  background: black;
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card__face--front {

    img{
        
        height: 100%;
        width: 100%;
    }
}

.card__face--back {
  background-color: rgba(0, 0, 0, 0.893);
  color: white;
  transform: rotateY(180deg);
}

/* this style is applied when the card is clicked */
.flipme {
  transform: rotateY(180deg);
}
</style>