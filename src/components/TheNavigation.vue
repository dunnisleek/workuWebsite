<template>
    <section>
       <div>
             
        <router-link  to="/">
          <img src="@/assets/worku..svg"/>
       </router-link>
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
    top: 30px;
    display: flex;
    width: 90%;
    gap: 31rem;
    font-family: 'Inter', sans-serif;
    align-items: center;
    max-width: 90%;
    justify-content: center;
    background: transparent;
    position: absolute;
    z-index: 4;
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