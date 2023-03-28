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
<<<<<<< HEAD
  font-family: 'Inter', sans-serif;
font-family: 'Krona One', sans-serif;
=======
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
>>>>>>> 410a7f8622678b3a9cffb94851aa2b2c00249099
  
  
}
body{
  margin: 0;
     top:0;
}


</style>
