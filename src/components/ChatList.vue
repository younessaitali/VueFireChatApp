<template>
	<div class="h-full flex flex-col justify-between">
		<div>
			<div v-for="chat of chats" :key="chat.id">
				<router-link :to="{name:'ChatRoom',params:{id:chat.id}}">
					<a
						@click="broadcastEvent"
						href="#"
						class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md focus:outline-none focus:bg-gray-900 transition ease-in-out duration-150"
					>
						<img src="http://placekitten.com/200/300" alt="avatar" class="rounded-full h-16 w-16" />
						<div class="mt-1 ml-3">
							<div>{{chat.id}}</div>
							<div>
								<span class="text-gray-500 text-xs">online</span>
							</div>
						</div>
					</a>
				</router-link>
			</div>
		</div>
		<div class="flex justify-center">
			<button @click="createChatRoom()">
				<font-awesome-icon class="m-4" icon="plus-circle" size="3x" />
			</button>
		</div>
	</div>
</template>

<script>
import { db } from "../firebase";
export default {
	props: {
		uid: {
			required: true
		}
	},
	data() {
		return {
			chats: []
		};
	},
	firestore() {
		return {
			chats: db.collection("chats").where("owner", "==", this.uid)
		};
	},
	methods: {
		async createChatRoom() {
			await db.collection("chats").add({
				createdAt: Date.now(),
				owner: this.uid,
				members: [this.uid]
			});
		},
		broadcastEvent() {
			this.$emit("ChatRoomChanged");
		}
	}
};
</script>

<style>
</style>