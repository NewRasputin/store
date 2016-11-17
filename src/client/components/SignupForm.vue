<template lang="html">
	<form @keyup.enter="submit" @click.stop>
		<span class='close' @click="toggleLogin">x</span>
		<label for="username">Username:</label>
		<input v-model="usrname" type="text" name="username" value="" autofocus>
		<label for="Email">Email:</label>
		<input v-model="email" type="text" name="email" value="">
		<label for="password">Password:</label>
		<input v-model="psswrd" type="password" name="password" value="">
		<label for="repassword">Retype Password:</label>
		<input v-model="repsswrd" type="password" name="repassword" value="">
		<h4 class="match" v-if='passMatch'>Passwords match!</h4>
	</form>
</template>

<script>
export default {
	name: 'SignupForm',
	data () {
		return {
			usrname: '',
			email: '',
			psswrd: '',
			repsswrd: ''
		}
	},
	computed: {
		passMatch () {
			if (this.psswrd !== '') {
				return this.psswrd === this.repsswrd
			}
		}
	},
	methods: {
		submit () {
			this.$http.post('/auth/signup', {
				usrname: this.usrname,
				email: this.email,
				psswrd: this.psswrd
			})
				.then((res) => {
					this.usrname = ''
					this.email = ''
					this.psswrd = ''
					this.repsswrd = ''
					this.$store.commit('toggleSignup')
					console.log(res.body)
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
.match {
	color: green;
}
</style>
