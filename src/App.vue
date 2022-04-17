<template>
<v-app class="bg-gray-100">
  <v-navigation-drawer
        expand-on-hover
        rail
        permanent 
        theme = "light"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://ui-avatars.com/api/?name=Example+Account"
            title="Name"
            subtitle="Account Email"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-variant" title="Dashboard" value="Dashboard" href="/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Files" value="Files" href="/files"></v-list-item>
          <v-list-item prepend-icon="mdi-calendar-month" title="Calendar" value="Calendar" href="/calendar"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Settings" value="Settings" href="/settings"></v-list-item>
        </v-list>
    </v-navigation-drawer>

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