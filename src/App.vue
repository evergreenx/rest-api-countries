<template>
  <div id="app">
    <div id="nav">
      <nav class="navbarx navbar-light px-5 mb-5 fixed-top">
        <router-link class="navbar-brandx brand" to="/">
          Where in the World?
        </router-link>

        <li class="mt-1">
          <i class="fas fa-moon"></i>
          Dark Mode</li>
      </nav>
    </div>

    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
@import "/assets/bootstrap.min.css";

body {
  font-family: "Nunito", sans-serif;
}
li {
  list-style-type: none;
  padding: 5px 0px;
}
.navbarx {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.brand {
  font-weight: 800;
  font-size: 23px;
  color: black;
  padding: 5px 0px;
}
</style>

<script>
export default {};
</script>

b-nav
