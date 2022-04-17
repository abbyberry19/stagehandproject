<template>
    <v-theme-provider theme="dark" with-background>
        <NavDrawer />
    </v-theme-provider>
</template>

<script>

import NavDrawer from './ui/NavDrawer.vue'

export default {
  name: 'FilesView',
  components: {
    NavDrawer
  }
}

</script>