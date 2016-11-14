<template lang="html">
  <div class="flex-container">
		<Item
			v-for='(item, index) in items'
			v-bind:item="item"
			v-bind:index="index">
		</Item>
  </div>
</template>

<script>
import Item from '../Item.vue'
export default {
	name: 'Home',
	components: {Item},
	computed: {
		items () {
			return this.$store.state.items
		}
	},
	mounted () {
		this.$http.get('/api/items')
			.then((res) => {
				this.$store.commit('setItems', res.body)
			}, (res) => {
				console.log(res.body)
			})
	}
}
</script>

<style lang="css">
img {
	max-width: 400px;
}
.flex-container {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
}
</style>
