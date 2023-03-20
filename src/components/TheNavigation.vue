<template>
    <section>
       <div>
          <img src="@/assets/worku..svg"/>
       </div>
       <div>
       <router-link to="/">Home</router-link>
       <router-link to="/features">Features</router-link> 
       <router-link to="">Contact</router-link>
       <router-link to="">Help</router-link>
       <router-link to="">
         <button>Login</button>
       </router-link>
      </div>
    </section>
</template>
<style scoped>
a{
       color:#ffffff;
       margin-right:30px;
       text-decoration:none;
       font-size:17px;
}
a:hover{
       color:#E0FF00;
}
section{
       display:flex;
       background:transparent;
       position: absolute;
       z-index: 4;
       gap:45rem;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      padding:45px 80px 0px 80px;
}
button{
       font-size:17px;
       padding:8px 25px;
       border-radius:5px;
       border:none;
       text-transform: capitalize;
}
button:hover{
       background:#E0FF00;
}

</style>