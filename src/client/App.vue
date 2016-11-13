<template lang="html">
	<div>
		<NavBar></NavBar>
		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
	components: {NavBar}
}
</script>

<style lang="css">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab');
	html, body {
		margin: 0;
	}
</style>
