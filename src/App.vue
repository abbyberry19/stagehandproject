<script>
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Profile from './components/Profile.vue'
import Calendar from './components/Calendar.vue'
import Settings from './components/Settings.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': DashboardView,
  '/signup': SignupView,
  '/login': LoginView,
  '/profile': ProfileView,
  '/calendar': CalendarView,
  '/settings': SettingsView
  }

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/">Dashboard</a> |
  <a href="#/signup">Signup</a> |
  <a href="#/login">Login</a> |
  <a href="#/profile">Profile</a> |
  <a href="#/calendar">Calendar</a> |
  <a href="#/settings">Settings</a> |
  <a href="#/non-existent-path">Not Found</a>
  <component :is="currentView" />
</template>
