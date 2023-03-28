import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
//import all the folder you want to use as global
import {createRouter, createWebHistory} from "vue-router"
import FeaturesPage from "./Views/FeaturesPage.vue"
import HeroSection from "./Views/HeroSection.vue"
import GoogleCloud from "@/FeaturesSubPages/GoogleCloud.vue"
import BiometricIdentity from "@/FeaturesSubPages/BiometricIdentity"
=======

import {createRouter, createWebHistory} from "vue-router"
import FeaturesPage from "./Views/FeaturesPage.vue"
import HeroSection from "./Views/HeroSection.vue"
>>>>>>> 410a7f8622678b3a9cffb94851aa2b2c00249099


const router = createRouter({
       history:createWebHistory(),
       routes:[
<<<<<<< HEAD
              {path:"/",
              name:'hero',
              component:HeroSection} ,

=======
>>>>>>> 410a7f8622678b3a9cffb94851aa2b2c00249099
              {path:"/features",
              name:'features',
              component:FeaturesPage},

<<<<<<< HEAD
              {path:"/googlecloud",
              name:'google',
              component:GoogleCloud},

              {
                     path:"/BiometricIdentity",
                     name:"Biometric",
                     component:BiometricIdentity
              }

              
=======
              {path:"/",
              name:'hero',
              component:HeroSection}
>>>>>>> 410a7f8622678b3a9cffb94851aa2b2c00249099
       ]
});

const app = createApp(App);
app.use(router);

app.mount("#app");
