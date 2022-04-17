<template>
    <!-- <v-theme-provider theme="dark" with-background> -->
    <v-card>
        <LoginButton />
    </v-card>
    <!-- </v-theme-provider> -->
</template>

<script>
import LoginButton from './ui/LoginButton.vue'

export default {
  name: 'LoginView',
  components: {
    LoginButton
  }
}
</script>