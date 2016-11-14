<template lang="html">
	<div class="app">
		<NavBar></NavBar>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
	name: 'App',
	components: {NavBar}
}
</script>

<style lang="css">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab');
	html, body, .app {
		margin: 0;
		height: 100%;
		font-family: 'Open Sans', sans-serif;
	}
	.container {
		padding: 3rem;
		background-color: #F5F5F5;
		height: 100%;
	}
</style>
