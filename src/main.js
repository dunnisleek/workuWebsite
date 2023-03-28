import { createApp } from 'vue'
import App from './App.vue'
//import all the folder you want to use as global
import {createRouter, createWebHistory} from "vue-router"
import FeaturesPage from "./Views/FeaturesPage.vue"
import HeroSection from "./Views/HeroSection.vue"
import GoogleCloud from "@/FeaturesSubPages/GoogleCloud.vue"
import BiometricIdentity from "@/FeaturesSubPages/BiometricIdentity"


const router = createRouter({
       history:createWebHistory(),
       routes:[
              {path:"/",
              name:'hero',
              component:HeroSection} ,

              {path:"/features",
              name:'features',
              component:FeaturesPage},

              {path:"/googlecloud",
              name:'google',
              component:GoogleCloud},

              {
                     path:"/BiometricIdentity",
                     name:"Biometric",
                     component:BiometricIdentity
              }

              
       ]
});

const app = createApp(App);
app.use(router);

app.mount("#app");
