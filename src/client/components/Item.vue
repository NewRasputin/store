<template lang="html">
  <div class="">
		<img src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png" alt="" />
		<h3>{{item.name}}</h3>
		<p>{{item.desc}} - ${{item.price.toFixed(2)}}</p>
  </div>
</template>

<script>
export default {
	name: 'Item',
	props: ['item']
}
</script>

<style lang="css">
</style>
