<script>
export default {
    name: 'MovieCard',
    props:{
        card: Object,
    }
}
</script>

<template>
        <ul>
            <li>
                {{card.title || card.name}} 
            </li>
        </ul>
</template>

<style lang="scss" scoped>

</style>