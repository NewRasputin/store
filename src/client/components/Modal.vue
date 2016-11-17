<template lang="html">
  <div class='modalWrap'>
		<div @click="toggleModal" class="modal">
			<slot>If you can see this I think that means something went wrong...</slot>
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
	.modalWrap {
		z-index: 1;
		display: table;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.modal {
		display: table-cell;
		vertical-align: middle;
		background-color: rgba(15,15,15,0.75) ;
	}
</style>
