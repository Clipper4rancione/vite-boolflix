<script>
export default {
    name: 'MovieCard',
    props:{
        card: Object,
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
                <li><h3 class="text-center">{{card.title || card.name}}</h3></li>
                <li></li>
                <li></li>
            </ul>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>
body {
  font-family: sans-serif;
}

.scene {
  width: 200px;
  height: 280px;
  margin: 40px 0;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
}

.card__face--front {

    img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}

.card__face--back {
  background-color: white;
  transform: rotateY(180deg);
}

/* this style is applied when the card is clicked */
.flipme {
  transform: rotateY(180deg);
}
</style>