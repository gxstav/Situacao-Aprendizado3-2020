<template>
  <div id="app">
   <div class="center examplex">
      <vs-navbar center-collapsed v-model="active">
        <template #left>
          <img src="./assets/Logo.png" alt="">
        </template>
        <vs-navbar-item :active="active == 'License'" id="License">
        <router-link to="/">Inicio</router-link> 
        </vs-navbar-item>
        <vs-navbar-group>
          <router-link to="/about">Sobre</router-link>
          <template #items>
            <vs-navbar-item :active="active == 'guide'" id="guide">
              Guide
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">
              Documents
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
              Components
            </vs-navbar-item>
          </template>
        </vs-navbar-group>

        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button warn>Sou uma ONG</vs-button>
        </template>
      </vs-navbar>
      <div class="square">
        <div class="child">
          child 1
        </div>
        <div class="child">
          child 2
        </div>
        <div class="child">
          child 3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data:() => ({
      active: 'guide'
    })
  }
  </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
