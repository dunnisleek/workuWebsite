import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from "vue-router"
import FeaturesPage from "./Views/FeaturesPage.vue"
import HeroSection from "./Views/HeroSection.vue"


const router = createRouter({
       history:createWebHistory(),
       routes:[
              {path:"/features",
              name:'features',
              component:FeaturesPage},

              {path:"/",
              name:'hero',
              component:HeroSection}
       ]
});

const app = createApp(App);
app.use(router);

app.mount("#app");
