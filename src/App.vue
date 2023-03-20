<template>
  <section>
    <TheNavigation/>
    <router-view></router-view>
  <TheFooter/>
  </section>
</template>

<script>
// import HeroSection from './Views/HeroSection.vue';

import TheNavigation from './components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
   TheNavigation ,TheFooter
  }
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
body{
  margin: 0;
     top:0;
}


</style>
