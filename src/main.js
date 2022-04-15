import { createApp,h } from 'vue'
import App from './App.vue'
//import Vue from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './style/style.css'

loadFonts()

createApp({
    render: ()=>h(App)
})
.use(vuetify)
.mount('#app')
