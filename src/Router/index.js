import {createRouter, createWebHistory} from "vue-router"
import FeaturesPage from "./Views/FeaturesPage.vue"
import HeroSection from "./Views/HeroSection.vue"
import GoogleCloud from "@/FeaturesSubPages/GoogleCloud.vue"
import BiometricIdentity from "@/FeaturesSubPages/BiometricIdentity"


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

         const router = createRouter({ 
                history:createWebHistory(process.env.BASE_URL),
                routes,
         })

         export default router