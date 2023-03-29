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
  font-family: 'Inter', sans-serif;
font-family: 'Krona One', sans-serif;
  
  
}
body{
  margin: 0;
     top:0;
}


</style>
