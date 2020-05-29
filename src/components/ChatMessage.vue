<template>
	<div>
		<div class="mb-3 text-right" :class="fromUser_text">
			<span class="text-gray-600 pl-2">10:10 AM, Today</span>
			<span class="pl-1">{{message.sender}}</span>
			<i class="fa fa-circle me"></i>
		</div>
		<div
			class="text-white py-5 px-6 text-lg border-4 mb-2 width-11/12 leading-6 rounded-md"
			:class="fromUser_color"
		>
			{{message.text}}
			<audio v-if="message.audioURL" :src="message.audioURL" controls></audio>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			required: true,
			type: Object
		},
		owner: {
			required: true,
			type: Boolean
		}
	},
	computed: {
		fromUser_text: function() {
			const text = this.owner ? "text-right" : "text-left";
			return text;
		},
		fromUser_color: function() {
			const color = this.owner
				? "bg-blue-400 border-blue-400 float-right"
				: "bg-green-400 border-green-400 float-left";
			return color;
		}
	}
};
</script>

<style >
</style>