<template>
       <div>
            <h2>FAQs</h2>
            
              <dl v-for="faqs in faq" :key="faqs.id">
                     <dt @click="faqs.open =! faqs.open">{{faqs.title }}
                  <i class="fa-solid fa-chevron-down"></i>
                     
                     </dt>
                     <dd v-show="faqs.open">{{ faqs.description }}</dd>
              </dl>

       </div>
</template>

<script>
import FaqsContent from '@/FaqsContent';


       export default {
              data(){
                     return{
                            faq : FaqsContent.faq,
                            activeItemId: false
                     }
              },
              // methods:{
              //   faqOpen(){ 
                       
              //       return  this.activeItemId= !this.activeItemId
              // }
              // }
              
              
       }
</script>

<style scoped>
h2{
       font-size:40px;
       text-align: center;
}
div{
       text-align: center; 
       padding:0px 0px 100px 0px;
}

dt{
       background: #F2F0F0;
       width:800px;
       padding: 20px 40px;
       position: relative;
       margin: auto;
       text-align: left; 

}
dd{
       width:800px;
       padding: 20px 40px;
       position: relative;
       margin: auto;
       text-align: left;   
}
i{
       position: absolute;
       display: inline-flex;
       left:50rem;
}
</style>