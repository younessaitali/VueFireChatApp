<template>
	<div class="text-xl text-gray-600">
		<slot name="user" :user="user"></slot>
	</div>
</template>

<script>
// import auth from "../auth";

export default {
	data() {
		return {
			user: this.$store.state.user
		};
	}
};
</script>

<style>
</style>