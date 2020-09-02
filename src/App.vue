<script>
import NavBar from '@/views/NavBar.vue';
import Footer from '@/views/Footer.vue'

export default { 
  name: "App",
  components: {
    NavBar,
    Footer
  },
}
</script>

<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a{
  text-decoration: none;
  color: black;
}

#app {
  font-family: 'Poppins', sans-serif;
  padding-top: 100px;
}

button {
  border: none;
  background-color: transparent;
}

button:focus {
  outline: 0;
}

::selection {
  background-color: #6e84f5;
}


</style>
