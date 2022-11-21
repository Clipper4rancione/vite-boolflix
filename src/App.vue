<script>

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';

export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>


<style lang="scss">
  @use '.styles/general'
</style>