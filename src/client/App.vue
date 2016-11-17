<template lang="html">
	<div class="app">
		<NavBar></NavBar>
		<transition name="fade">
			<Modal v-if="showLogin">
				<LoginForm />
			</Modal>
		</transition>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Modal from './components/Modal.vue'
import LoginForm from './components/LoginForm.vue'
export default {
	name: 'App',
	components: {NavBar, Modal, LoginForm},
	created () {
		this.$http.get('/auth/login')
			.then((res) => {
				this.$store.state.username = res.body.username
			}, (res) => {

			})
	},
	computed: {
		showLogin () {
			return this.$store.state.showLogin
		}
	}
}
</script>

<style lang="css">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab');
	html, body, .app {
		margin: 0;
		height: 100%;
		font-family: 'Open Sans', sans-serif;
		overflow: hidden;
	}
	.container {
		padding: 3rem;
		background-color: #F5F5F5;
		height: 100%;
	}
	.fade-enter-active, .fade-leave-active {
  	transition: opacity .5s ease;
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0;
	}
</style>
