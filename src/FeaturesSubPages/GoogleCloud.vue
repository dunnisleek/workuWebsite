<template>
      <div>

               <div class="heroimg">

               </div>
                <!-- <button @click="goBack">Go Back</button> -->
                <div class="googleC">
                    <h2>Google Cloud</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae facilis eveniet ad deserunt recusandae nobis quam dolorem quidem temporibus
                    perferendis quo eligendi nihil omnis blanditiis aliquid, iure quae, nemo minus?</p>
                </div>
               
      </div>
</template>

<script>
// import featureContentBox from '@/featureContentBox';
export default {
                // computed:{
                //  contentbox() {
                //    return featureContentBox.featureContents.find(
                //          (contentbox) => contentbox.slug== this.slug
                //           )   
                // }
//             },
                methods:{
                    goBack(){
                       return this.$router.go(-1)
                    }
                }
             
}
</script>
<style scoped>
.heroimg{
   background-image: url(@/assets/lady.jpeg);
   background-size: cover;
   background-position: 50% 50%;
   
   width:100%;
   height:80vh;

}
div{
   /* background: peachpuff;
   height: 100vh; */
   /* padding: 130px; */
   
}
.googleC{
                padding: 100px 50px;
                max-width: 1000px;
                margin: auto;
                text-align: center
}
.googleC p{
      padding-right: ;
}
</style>