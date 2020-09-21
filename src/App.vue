<template>
  <div id="app">
    <div id="nav">

<nav class="navbarx navbar-light px-5 mb-5">

<a class="navbar-brandx brand">
Where in the World?

</a>




<li class="mt-1">Dark Mode</li>


</nav>
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    
    <router-view />
  </div>
  
</template>

<style>

@import '/assets/bootstrap.min.css';

body{
  font-family: 'Nunito', sans-serif;
}
li{
  list-style-type: none;
  padding:5px 0px
}
.navbarx{
  display:flex;
  justify-content: space-between;
  padding: 20px;
background-color:#fff;
  box-shadow:  0 .5rem 1rem rgba(0,0,0,.15)!important;
}



.brand{
  font-weight: 800;
  font-size: 23px;
  color:black;
   padding:5px 0px
}
</style>

<script>


export default {
  
}
</script>

b-nav