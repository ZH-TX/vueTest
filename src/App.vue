<template>
  <div id="app">

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/test">Test</router-link>|
      <router-link to="/toast">Toast</router-link>|
      <router-link to="/breadcrumb">Bread</router-link>|
    </div> -->

    <!-- <router-view/> -->
  </div>
</template>



<style>
@import "~@/assets/css/normalize.css";


.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
