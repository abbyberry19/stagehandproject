<template>
<v-theme-provider class="bg-gray-100">
  <v-container class="h-screen ">
    <v-row no-gutters cols="12">
      <!-- <NavDrawer /> -->
      <v-col md="8">
        <v-card
          theme="light"
          class="pa-2"
          flat
        >
          <h1 class="title text-xl">NewsFeed</h1>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card
          theme="light"
          class="pa-2 ml-4"
          flat
        >
         <h1 class="title text-xl">Chat</h1>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-theme-provider>
</template>

<script>
// import NavDrawer from './ui/NavDrawer.vue'
// import AppHeader from './ui/AppHeader.vue'

export default {
  name: 'DashboardView',
  components: {
    // NavDrawer,
    // AppHeader
  }
}
</script>
