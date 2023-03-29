<template>
  <section>
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

       <!-- starts of feature content box -->
   
       
        <div class="contentbox">
       <div v-for="(contentbox, id) in featureContents" :key="id">
         <div>
          <img :src="require(`@/assets/featuresImages/${contentbox.image}`)"/>
         <div class="white-bg">
        <h2>{{ contentbox.title }}</h2>
        <p> {{contentbox.description}}</p>
      
        <router-link :to="{path:`${contentbox.learnMore}`}">Learn</router-link>
        <!-- <router-link :to="contentbox.learnMore">learn</router-link> -->
        <!-- <a :href="contentbox.learnMore">Learn More</a> -->
       
       </div> 
       </div>
       </div>
     </div>
   
   <div class="subFooter">
     
       <div>
              <p>Get Started</p>
              <h3>Have an Idea?</h3>
              <h3 class="discuss">Let’s Discuss Your Project </h3>
              <p>With the best team built on expertise and global insights, 
                we develop our own off-the-self and innovative solutions to deliver continously improved services. </p>
                <button class="learnbtn">Learn More</button>
       </div>
       <div>
              <img src="@/assets/featuresImages/subfooterbg.jpeg"/>
       </div>
   </div> 
 
 </section>
</template>

<script>
import TheCarousel from '@/components/TheCarousel.vue';
import TheSlider from '@/components/TheSlider.vue';
import featureContentBox from '@/featureContentBox';  //import the feature contents
export default {
       components:{
              TheCarousel,TheSlider
       },

       data(){
           return{
              featureContents: featureContentBox.featureContents
           }   
           
       },
       // mounted() {
       //        this.links = links
       //         }
         setup(){
              const carouselSlides = ['lady.jpeg', 'lady-2.jpeg','lady-3.jpeg']

              return{carouselSlides}
       }
}
</script>

<style scoped>     
section{
       background: #F2F4F7;
      
} 
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
.white-bg{
       background: #ffffff;
       top: -28px;
       position: relative;
       padding: 20px 70px 100px 50px;

}
img{
       min-width: 100%;
       height:90vh;
       background-position: center center;
       object-fit: cover;
       
}

.contentbox{
  /* display: flex;
  flex-direction: column; */
       display:grid;
       grid-template-columns: repeat(2,1fr);
       gap:20px;
      max-width: 1200px;
       margin: 0 auto;
       padding-bottom: 120px;
       
}

.contentbox img{
       width:100%;
       height:50vh;
       object-fit: cover;
     
       
}
a{
text-decoration: none;
color:#030D18;
text-transform: uppercase;
position: relative;
top:30px;
}
a::after{
       content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url('@/assets/learniconmain.svg');
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 5px;
}
a:hover{
       color:#030D18;
      
       transform:scaleX(1.2);
}
.white-bg p{
       font-family: 'Inter', sans-serif;
}

.subFooter{
       background: #ffffff;
       position: relative;
       /* max-width: fit-content; */
       padding:100px;
       display: flex;
       justify-content: center;
       
}
.subFooter div:first-child{
      background-image: url(@/assets/featuresImages/bluebg.png);
      background-position: center center;
      background-size: cover;
      width:45%;
      max-width:45%;
      /* height: fit-content; */
      padding: 70px 140px 0px 100px;
      color:#ffffff;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
}
.subFooter img{
       width:55%;
       height: fit-content;
       object-fit: cover;
       border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;

}
.sub{
       max-width: 2300px;
}
p{
       font-family: 'Inter', sans-serif;
       font-size: 18px;
       line-height: 25px;
}
.discuss{
       font-size: 25px;
}
.learnbtn{
  background: #e0ff00;
  font-size: 17px;
  line-height:20px;
  padding: 10px;
  margin-top: 10px;
  font-family: 'Inter', sans-serif;
  border-radius: 5px;
  width: 10rem;
  border: none;
  transition: all 0.3s linear;
}
video{
       background: red;
       z-index: 5;
}
</style>