<template>
       <div class="carousel">
          <slot :currentSlide="currentSlide"/>

          <!-- create our navigation buttons -->
          <div class="navigate">
             <div class="togglePage left"> 
              <i @click="prevSlide"  class="fa-solid fa-chevron-left"></i>
              </div>
              <div  @click="nextSlide" class="togglePage right"> 
                     <i class="fa-solid fa-chevron-right"></i>
              </div>


          </div>

          <!-- Pagination -->
          <div class="pagination">
              <span @click="goToSlide(index)"
              v-for="(slide, index) in getSlideCount"
              :key="index"
              :class="{active: index + 1 === currentSlide}">
             
              </span>
          </div>

       </div>
</template>
 
<script>
import {ref, onMounted} from 'vue'
export default {
       setup(){
              const currentSlide = ref(1)
              const getSlideCount = ref(null)

              //next slide
              const nextSlide = ()=>{
               if(currentSlide.value === getSlideCount.value){
                     currentSlide.value = 1;
                     return;
               }
               currentSlide.value += 1
              }

              //previous slide
              const prevSlide = () =>{
                     if(currentSlide.value === 1){
                            currentSlide.value = 1
                            return
                     }
                     currentSlide.value -= 1
              }
          
              //for the pagination
              const goToSlide=(index)=>{
                     currentSlide.value = index + 1
              }
              onMounted(() =>{
                     getSlideCount.value =document.querySelectorAll('.slide').length
                     console.log(getSlideCount.value)
              })
               //to use this function we have to return it here
              return{currentSlide ,nextSlide, prevSlide,getSlideCount, goToSlide}
       }
}
</script>


<style scoped>
  .navigate{
       padding:0 20px;
       width:95%;
       height: 100%;
       position: absolute;
       display:flex;
       justify-content: space-between;
       align-items: center;
  }
  .togglePage{
       display:flex;
       flex:1;
  }
 .right{
       justify-content: flex-end;
 }
 .left{
       margin-left:2rem;
 }
  i{
     display:flex;
     justify-content:center;
     align-items: center;
     background: #0a1428;;
     color:#fff;
     width:40px;
     height:40px;
    
  }
 /* style for our pagination */
 .pagination{
       position:absolute;
       top:400px;
       bottom:24px;
       width:100%;
       display:flex;
       gap:16px;
       justify-content: center;
       align-items:center;
 }

 span{
       cursor:pointer;
       width:20px;
       height:20px;
       border-radius:50%;
       background: grey;

 }
 .active{
       background: blue; 
 }
</style>