<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import { auth } from "./firebase";

export default {
	name: "App",
	data() {
		return {
			a: auth
		};
	}
};
</script>

<style>
</style>
