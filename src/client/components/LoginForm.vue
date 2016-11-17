<template lang="html">
	<form @keyup.enter="submit" @click.stop>
		<span class='close' @click="toggleLogin">x</span>
		<label for="username">Username:</label>
		<input v-model="usrname" type="text" name="username" value="" autofocus>
		<label for="password">Password:</label>
		<input v-model="psswrd" type="password" name="password" value="">
	</form>
</template>

<script>
export default {
	name: 'LoginForm',
	data () {
		return {
			usrname: '',
			psswrd: ''
		}
	},
	methods: {
		submit () {
			this.$http.post('/auth/login', {
				usrname: this.usrname,
				psswrd: this.psswrd
			})
				.then((res) => {
					this.usrname = ''
					this.psswrd = ''
					this.$store.commit('toggleLogin')
					this.$store.commit('setUsername', res.body.username)
				}, (res) => {
					console.error(res.body)
				})
		},
		toggleLogin () {
			this.$store.commit('toggleLogin')
		}
	}
}
</script>

<style lang="css">
form {
	width: 25%;
	min-width: 25rem;
	margin: 0 auto 20rem auto;
	padding: 2em;
	background-color: #F5F5F5;
	border-radius: 4px;
	opacity: 100%;
}
.close {
	float: right;
	cursor: pointer;
	color: white;
	position: relative;
	left: 4rem;
	bottom: 4.5rem;
	text-shadow: 0 0 10px #E7E7E7;
}
input {
	display: block;
	width: 100%;
	text-align: center;
	margin: 1.5rem 0;
	padding: .5rem 0;
	border-radius: 4px;
	font-size: 1.25rem;
}
</style>
