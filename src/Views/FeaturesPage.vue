<template>
       <!-- add a slider here -->
       <div>
              <TheCarousel class="carousel"  v-slot="{currentSlide}">
                     <TheSlider v-for="(slide, index) in carouselSlides" :key="index">
                            <div v-show="currentSlide === index + 1" class="slide-info">
                                  
                                   <img :src="require(`../assets/${slide}`)"/>
                            </div>
                     </TheSlider>
              </TheCarousel>
       </div>
</template>

<script>
import TheCarousel from '@/components/TheCarousel.vue';
import TheSlider from '@/components/TheSlider.vue';
export default {
       components:{TheCarousel,TheSlider},
       setup(){
              const carouselSlides = ['lady.jpeg', 'lady-2.jpeg','lady-3.jpeg']

              return{carouselSlides}
       }
}
</script>

<style scoped>
.carousel{
       position: relative;
       overflow: hidden;
       max-height: 100vh;
       height:100vh;
}
.slide-info{
       position: absolute;
       width:100%;
       height:90%;
       top:0;
       left:0;
}
img{
       min-width: 100%;
       height:90vh;
       background-position: center center;
       object-fit: cover;
}
</style>