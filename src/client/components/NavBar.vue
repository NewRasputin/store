<template lang="html">
  <div class="navbar">
		<router-link to="/" exact>Home</router-link>
		<router-link to="/about">About</router-link>
		<div class="right">
			<router-link to="/login" exact>Login</router-link>
			<router-link to="/signup">Signup</router-link>
		</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
	.navbar {
		background-color: #333;
		padding: .5em 1em;
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
		padding: 0 .2em
	}
</style>
