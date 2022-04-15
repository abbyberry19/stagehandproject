<script>
import SignupView from './components/SignupView.vue'
import LoginView from './components/LoginView.vue'
import DashboardView from './components/DashboardView.vue'
import ProfileView from './components/ProfileView.vue'
import CalendarView from './components/CalendarView.vue'
import SettingsView from './components/SettingsView.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/dashboard': DashboardView,
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
  <a href="/dashboard">Dashboard</a> |
  <a href="/signup">Signup</a> |
  <a href="/login">Login</a> |
  <a href="/profile">Profile</a> |
  <a href="/calendar">Calendar</a> |
  <a href="/settings">Settings</a> |
  <a href="/non-existent-path">Not Found</a>
  <component :is="currentView" />
</template>
