<template lang="html">
  <div class="navbar">
		<router-link to="/" exact>Home</router-link>
		<router-link to="/about">About</router-link>
		<div class="right link-">
			<a v-if="!username" @click="toggleLogin">Login</a>
			<a v-if="!username" @click="toggleSignup">Signup</a>
			<a v-if="username">{{username}}</a>
			<a v-if="username" @click="logout">Logout</a>
		</div>
  </div>
</template>

<script>
export default {
	name: 'Navbar',
	computed: {
		username () {
			return this.$store.state.username
		}
	},
	methods: {
		toggleLogin () {
			this.$store.commit('toggleLogin')
		},
		toggleSignup () {
			this.$store.commit('toggleSignup')
		},
		logout () {
			this.$http.get('/auth/logout')
				.then((res) => {
					this.$store.state.username = ''
				}, (res) => {

				})
		}
	}
}
</script>

<style lang="css" scoped>
	.navbar {
		background-color: #333;
		padding: .75em 1em;
	}
	.router-link-active {
		text-shadow: 0 0 10px #C7C7C7;
	}
	.right {
		float: right;
	}
	a {
		text-decoration: none;
		font-size: 1.25em;
		font-family: 'Roboto Slab', serif;
		color: #F7F7F7;
		transition: text-shadow .1s;
		padding: 0 .2em;
		cursor: pointer;
	}
</style>
