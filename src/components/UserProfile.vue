<template>
	<div
		v-show="opened"
		class="fixed bottom-0 inset-x-0 px-4 z-90 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
	>
		<div
			v-show="opened"
			class="fixed inset-0 transition-opacity"
			:class="opened?'transform opacity-100 ':'transform opacity-0 '"
		>
			<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
		</div>

		<div
			v-show="opened"
			class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
			:class="opened?'opacity-100 translate-y-0 sm:scale-100':'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'"
		>
			<div>
				<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
					<svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<div class="mt-3 text-center sm:mt-5">
					<h3 class="text-lg leading-6 font-medium text-gray-900">{{user.uid}}</h3>
					<div class="mt-2">
						<p class="text-sm leading-5 text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequatur amet labore.
						</p>
					</div>
				</div>
			</div>
			<div class="mt-5 sm:mt-6">
				<span class="flex w-full rounded-md shadow-sm">
					<button
						@click="CloseToggle"
						type="button"
						class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
					>Go back to Chat Room</button>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway2";

export default {
	mixins: [clickaway],
	props: {
		user: {
			type: Object,
			required: true
		},
		open: {
			type: Boolean,
			required: true
		}
	},

	data() {
		return { opened: false };
	},
	watch: {
		open: function(newVal) {
			// watch it
			this.opened = newVal;
		}
	},
	methods: {
		CloseToggle() {
			this.opened = false;
			this.$emit("Closed");
		},
		away() {
			this.opened = false;
		}
	}
};
</script>

<style>
</style>