<template>
  <article>
    <section class="wrap">
      <div class="first-row">
        <h1>Manage and track all your Work Inside one app</h1>
        <p class="para">
          Single Page Applications are web apps or sites that interact with the
          user by dynamically rewriting the current page rather than loading
          entire new pages from the server.
        </p>
        <button class="herobtn" @click="Toggle">Learn More</button>
      </div>
      <div>
        <img class="heroImg" src="@/assets/HeroImage.png" />
      </div>

      <transition name="fade">
        <div class="displayMessage" v-show="display">
          Thanks for clicking, Awesome
        </div>
      </transition>
    </section>

    <div class="wrapper">
      <h2>
        Create timelines, Track progress, assign work and talk with your clients
        inside one web app!
      </h2>

      <!-- <video src="" controls>   </video> -->
      <div>
        <iframe
          class="youtubevideo"
          width="800"
          height="475"
          src="https://www.youtube.com/embed/lKw6uqtGFfo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- start of the content box -->
    <div class="contentboxWrapper">
      <ul class="boxcontent" v-for="content in contents" :key="content.id">
        <img class="icon" :src="require(`@/assets/${content.image}`)" />

        <div>
          <li class="titleBox">{{ content.title }}</li>
          <li>{{ content.description }}</li>
        </div>
      </ul>
    </div>
    <button class="trybtn" @toggle-fav="toggleStatus">I want to try!</button>

    <!-- start of competition section -->
    <div class="competitorWrap">
      <div><img src="@/assets/lady.png" /></div>

      <div class="growth">
        <h2>Grow faster than your compititors</h2>
        <p>
          Single Page Applications are web apps or sites that interact with the
          user by dynamically rewriting the current page rather than loading
          entire new pages from the server.
        </p>

        <!-- start of icon text -->
        <div class="iconText">
          <div class="first">
            <div>
              <img class="firstImg" src="@/assets/Manage-Icon.svg" />
            </div>
            <div>
              <h3>Manage all your work</h3>
              <p>
                Single Page Applications are web apps or sites that interact
                with Single Page Applications are web apps or sites that
                interact with
              </p>
            </div>
          </div>
          <div class="first">
            <div>
              <img class="firstImg" src="@/assets/Scale-Icon.svg" />
            </div>
            <div>
              <h3>Manage all your work</h3>
              <p>
                Single Page Applications are web apps or sites that interact
                with Single Page Applications are web apps or sites that
                interact with
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- start of carousel -->
    <div>
      <TheCarousel class="carousel" v-slot="{ currentSlide }">
       
        <TheSlider v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <!-- <img class="slideImg" :src="require(`../assets/${slide}`)" /> -->
           
            <h2 class="slide-text">{{slide.description}} </h2>
            <p class="slide-name">{{ slide.name}}</p>
            <p class="slide-role">{{ slide.role }}</p>
            <img :src="require(`../assets/${slide.image}`)"/>
          
          </div>
        </TheSlider>
       
      </TheCarousel>
    </div>
    <!-- start of form section -->
    <div class="start-of-form">
        <div>
         <h2>Signup for early access offer!</h2>
         <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada 
          feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim</p>

          <form @submit.prevent="onSubmit">
            <input v-model="username" type="text" placeholder="Name"/>
            <!-- <label>{{ username }}</label> -->
            <input v-model="email" type="email" placeholder="Email"/>
            <button class="formBtn" @click="submitForm">Submit</button>
          </form>
        </div>
        <div>
          <img class="signupImg" src="@/assets/Signup-Image.png"/>
        </div>

    </div>
  <!-- end of form section -->

    <!-- start of FAQs section -->
   <AccordionSection ></AccordionSection>
 
  </article>
</template>
<script>
import TheCarousel from '@/components/TheCarousel.vue';
import TheSlider from '@/components/TheSlider.vue';
import carouselContent from "@/carouselContent";
import AccordionSection from "@/Views/AccordionSection.vue"

// import TestimonialView from '@/Testimonial/TestimonialView.vue'
export default{

       components:{TheCarousel,TheSlider, AccordionSection},
       data(){
              return{
                     display:false,
                     contents: carouselContent.contents ,
                      slides:[

                              "https://www.collinsdictionary.com/images/full/teacher_81762259.jpg",
                              "https://media.istockphoto.com/id/1348229043/photo/business-accountant-accountant-and-bookkeeper.jpg?b=1&s=170667a&w=0&k=20&c=augRvCO7cjzN58g8yvwsM0w9zXjw8hDjLN_5TwXYcc8="
                            ],
                      username:'',
                      email:''      

              }
       },

              setup(){
              const carouselSlides = [ 
                     {description:'This app is amazing Now im able to manage all my freelancing and agency work under one place. it make my life easy',
                      role:'freelancer',
                      name:'ASHUTOSH MEHTA',
                      image:'lady.jpeg'},
                      {description:'This app is amazing Now im able to manage This app is amazing Now im able to manage',
                      role:'Developer',
                      name:'DUNNI',
                      image:'lady-2.jpeg'}
                  ]

              return{carouselSlides}
       },

       methods:{
         Toggle(){
              this.display = !this.display
         },
         submitForm(){
           const ans= this.username + " " +this.email
             console.log(ans)
         }
       }
}
</script>

<style scoped>
.pink {
  height: 100vh;
  width: 100%;
}
section {
  background: #140d2d;
  width: 100%;
  height: 100vh;
  color: #fff;
  position: relative;
  margin-top: -2rem;

  /* top:-4rem; */
}

body {
  margin: 0;
  padding: 0;
 
}
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.heroImg {
  width: 750px;
  height: auto;
  position: relative;
  left: 0;
  right: 0;
  top: 110px;
}
.first-row {
  position: relative;
  top: 150px;
  left: 5rem;
}
h1 {
  font-size: 70px;
  line-height: 70px;
  padding-left: 2rem;
  text-transform: capitalize;
}
.para {
  font-size: 17px;
  padding-right: 10rem;
  padding-left: 2rem;
  position: relative;
  top: -30px;
}
.displayMessage {
  position: absolute;
  background: white;
  color: black;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  z-index: 10;
}
/* this is the transition style */
.fade-enter-active {
  transition: all 0.3s ease-out;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

button {
  background: #e0ff00;
  font-size: 18px;
  padding: 10px;
  margin-left: 2rem;

  border-radius: 5px;
  width: 10rem;
  border: none;
  transition: all 0.3s linear;
}
button:hover {
  background: #c1da08;
  transform: scaleX(1.1);
}
.wrapper {
  padding: 10rem 2rem;
}

.wrapper h2{
  width:795px;
}
 h2 {
  font-size: 50px;
  line-height: 60px;
  margin: auto;
  width: 840px;
  text-align: left;
  /* padding-left:-130px; */
}
div .youtubevideo {
  display: block;
  margin: 50px auto 10px auto;
  border-radius: 20px;
}
/* start of the content box style */
.contentboxWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
  margin: 0px 90px;
}
ul {
  padding: 80px 50px;
  height: auto;
  border-radius: 10px;
}

/* style for the first box */
ul:first-child {
  background: #000000;
  color: #ffffff;

  transition: all 0.6s ease-in;
}

ul:first-child:hover {
  background: #252525;
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
/* style for the second box */
ul:nth-child(2) {
  background: #f2f0f0;
  transition: all 0.3s linear;
}
ul:nth-child(2):hover {
  background: #000000;
  color: #ffffff;
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

/* style for the box */
ul {
  background: #e4cdcd;
  list-style-type: none;
  transition: all 0.3s linear;
}
ul:hover {
  background: #f2f0f0;
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
.titleBox {
  font-size: 30px;
  padding: 20px 0px;
}
/* end of the content box  */

.trybtn {
  font-size: 17px;
  text-transform: capitalize;
  margin: 20px auto;
  display: block;
  background: #e0ff00;
  border: none;
  border-radius: 5px;
  padding: 15px 24px;
  transition: all 0.3s linear;
}
button:hover {
  background: #c1da08;
  transform: scaleX(1.1);
}
.competitorWrap {
  display: flex;
  flex-direction: row;
  gap: 100px;
  flex-wrap: nowrap;

  padding: 65px 150px 65px 100px;
}
/* .first{
       display: flex;
       flex-direction: row;
       justify-content: flex-start;
} */
.growth {
  padding-top: 4rem;
  width: 34rem;
}
.growth h2 {
  width: 620px;
}

.first {
  display: flex;
  flex-direction: row;
  gap: 25px;
}
.firstImg {
  margin-top: 30px;
  width: 50px;
}
.first h3 {
  font-size: 25px;
  padding: 0px;
}
.carousel {
  position: relative;
  overflow: hidden;
  max-height: 100vh;
  padding:40px 0px;
  height: 60vh;
  background: #140D2D;
}
.carousel img{
       position: absolute;
       /* border-radius:70%; */
       height:12vh;
       object-fit: cover;
       top:290px;
       width:80px;
       left:300px;
}
.slide-info {
  position: absolute;
  width: 100%;
  height: 80%;
  top: 40;
  left: 0; 
  
}
.slide-text{
  /* min-width: 100%;
  height: 40vh; */
  padding-top:30px;
  color:#fff;
}
/* .slideView{
       font-size: 50px;
} */
.slide-name{
  position: absolute;
  top:300px;
left:390px;
color:#fff;
}
.slide-role{
position: absolute;
top:330px;
left:390px;
color:#8F85B2;
}


.start-of-form{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
  margin: 0px 50PX;
  padding:130px 0px 80px 0px;

}
.start-of-form h2{
  font-size: 50px;
    color: #000000;
    text-transform: capitalize;
    padding: 10px 26px;
    width: 32rem;

 }
 .formBtn{
  margin-left:23px;
 }
.start-of-form p{
  color:#000000;
  font-size:18px;
  margin-left:25px;

} 
.start-of-form div:nth-child(1){ 
    width: 434px;
    display: block;
 
}
/* .start-of-form div:nth-child(2){
 
  width:40%;
} */
.signupImg{
  width: 516px;
}
input{
  padding:10px;
  width:230px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom:20px;
  margin-left:23px;
}

</style>
