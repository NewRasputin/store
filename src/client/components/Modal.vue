<template lang="html">
  <div class='modalWrap'>
		<div @click="toggleModal" class="modal">
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	methods: {
		toggleModal () {
			this.$store.commit('toggleModal')
		}
	}
}
</script>

<style lang="css" scoped>
</style>
