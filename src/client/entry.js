import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import App from './App.vue'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		items: []
	},
	mutations: {
		setItems (state, items) {
			state.items = items
		}
	}
})

const router = new VueRouter({
	routes: [
		{path: '/', component: Home},
		{path: '/about', component: About}
	]
})

new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	render: h => h(App)
})
