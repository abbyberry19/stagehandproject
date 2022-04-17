<template>
<v-app class="bg-gray-100">
  
    <v-main>

      <v-container fluid>

        <router-view />
      
      </v-container>

  </v-main>
  
</v-app>
</template>

<script>
//import Navbar from './components/Navbar.vue'
// import NavDrawer from './components/ui/NavDrawer.vue'

export default {
  name: 'App',

  components: {
    // NavDrawer
  },

  data: () => ({
    //
  }),
}
</script>

<style>
 @import './style/style.css';
</style>