<template>
	<div>
		<User #user="{user}">
			<div class="h-screen flex overflow-hidden bg-gray-100" v-on:keyup.escape="sidebarOpen = false">
				<!-- Off-canvas menu for mobile -->

				<div v-show="sidebarOpen" class="md:hidden">
					<div
						@click="sidebarOpen = false"
						v-show="sidebarOpen"
						class="fixed inset-0 z-30 transition-opacity ease-linear duration-300"
						:class="sidebarOpen?'opacity-0':'opacity-100'"
					>
						<div class="absolute inset-0 bg-gray-600 opacity-75"></div>
					</div>
					<div class="fixed inset-0 flex z-40">
						<div
							v-show="sidebarOpen"
							class="flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800 transform ease-in-out duration-300"
							:class="sidebarOpen?'translate-x-0':'-translate-x-full'"
						>
							<div class="flex justify-between items-center h-16 flex-shrink-0 px-4 bg-gray-800">
								<div class="relative z-10 flex-shrink-0 flex h-16">
									<div class="flex items-center md:ml-6">
										<div v-on-clickaway="menutoggle" class="relative">
											<div>
												<button
													@click="open = !open"
													class="max-w-xs mb-5 flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
												>
													<svg height="30px" width="30px" viewBox="0 0 36 36">
														<g id="settings" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
															<g id="Settings">
																<polygon id="Bounding-Box" points="0 36 36 36 36 0 0 0" />
																<path
																	id="Fill-1"
																	d="M18,11.00025 C14.1345,11.00025 11.0005,14.13425 11.0005,18.00025 C11.0005,21.86575 14.1345,24.99975 18,24.99975 C21.8655,24.99975 24.9995,21.86575 24.9995,18.00025 C24.9995,14.13425 21.8655,11.00025 18,11.00025 Z M31,17.42725 L31,18.57325 C31,19.14125 30.679,19.66025 30.171,19.91475 L28.638,20.68075 C28.2975,20.85125 28.0215,21.13725 27.8915,21.49475 C27.7675,21.83575 27.624,22.16775 27.4665,22.49175 C27.3,22.83375 27.286,23.23025 27.406,23.59175 L27.96,25.25225 C28.1395,25.79125 27.999,26.38575 27.5975,26.78725 L26.787,27.59775 C26.3855,27.99925 25.791,28.13975 25.2525,27.95975 L23.595,27.40725 C23.234,27.28725 22.837,27.30125 22.495,27.46775 C22.1705,27.62575 21.837,27.76975 21.4945,27.89425 C21.1355,28.02475 20.849,28.30125 20.6785,28.64275 L19.9145,30.17075 C19.6605,30.67875 19.141,31.00025 18.573,31.00025 L17.427,31.00025 C16.859,31.00025 16.3395,30.67875 16.0855,30.17075 L15.3215,28.64275 C15.151,28.30125 14.864,28.02475 14.5055,27.89425 C14.1625,27.76975 13.83,27.62575 13.505,27.46775 C13.163,27.30125 12.766,27.28725 12.405,27.40725 L10.7475,27.95975 C10.2085,28.13975 9.6145,27.99925 9.213,27.59775 L8.4025,26.78725 C8.0005,26.38575 7.8605,25.79125 8.04,25.25225 L8.594,23.59175 C8.714,23.23025 8.7,22.83375 8.5335,22.49175 C8.376,22.16775 8.2325,21.83575 8.1085,21.49475 C7.9785,21.13725 7.7025,20.85125 7.362,20.68075 L5.829,19.91475 C5.321,19.66025 5,19.14125 5,18.57325 L5,17.42725 C5,16.85875 5.321,16.33925 5.829,16.08525 L7.362,15.31925 C7.7025,15.14875 7.9785,14.86275 8.1085,14.50525 C8.2325,14.16425 8.376,13.83225 8.5335,13.50825 C8.7,13.16625 8.714,12.76975 8.594,12.40825 L8.04,10.74775 C7.8605,10.20875 8.0005,9.61475 8.4025,9.21275 L9.213,8.40275 C9.6145,8.00075 10.2085,7.86025 10.7475,8.04025 L12.405,8.59275 C12.766,8.71275 13.163,8.69875 13.505,8.53225 C13.83,8.37425 14.1625,8.23025 14.5055,8.10575 C14.864,7.97525 15.151,7.69875 15.3215,7.35725 L16.0855,5.82925 C16.3395,5.32125 16.859,5.00025 17.427,5.00025 L18.573,5.00025 C19.141,5.00025 19.6605,5.32125 19.9145,5.82925 L20.6785,7.35725 C20.849,7.69875 21.1355,7.97525 21.4945,8.10575 C21.837,8.23025 22.1705,8.37425 22.495,8.53225 C22.837,8.69875 23.234,8.71275 23.595,8.59275 L25.2525,8.04025 C25.791,7.86025 26.3855,8.00075 26.787,8.40275 L27.5975,9.21275 C27.999,9.61475 28.1395,10.20875 27.96,10.74775 L27.406,12.40825 C27.286,12.76975 27.3,13.16625 27.4665,13.50825 C27.624,13.83225 27.7675,14.16425 27.8915,14.50525 C28.0215,14.86275 28.2975,15.14875 28.638,15.31925 L30.171,16.08525 C30.679,16.33925 31,16.85875 31,17.42725 Z"
																	fill="currentColor"
																	class="text-gray-100"
																/>
															</g>
														</g>
													</svg>
												</button>
											</div>
											<div
												class="origin-top-right transform absolute left-0 mt-2 w-48 rounded-md shadow-lg"
												:class="open?'transform opacity-100 scale-100':'transform opacity-0 scale-95'"
											>
												<div class="py-1 rounded-md bg-white shadow-xs">
													<a
														@click="userProfileToggleF"
														href="#"
														class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
													>Your Profile</a>

													<a
														@click="SignOut()"
														href="#"
														class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
													>Sign out</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="absolute top-0 right-0 -mr-14 p-1">
								<button
									v-show="sidebarOpen"
									@click="sidebarOpen = false"
									class="flex items-center justify-center h-12 w-12 mt-3 rounded-full focus:outline-none focus:bg-gray-600"
								>
									<svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div class="flex-shrink-0 flex items-center px-4">
								<div class="flex-1 flex">
									<div class="w-full flex md:ml-0">
										<label for="search_field" class="sr-only">Search</label>
										<div class="relative w-full text-gray-400 focus-within:text-gray-600">
											<div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
												<svg class="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
													/>
												</svg>
											</div>
											<input
												class="block w-full bg-gray-700 h-full pl-8 pr-3 py-2 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
												placeholder=" Search"
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="mt-5 flex-1 h-0 overflow-y-auto">
								<nav class="px-2">
									<div v-if="user">
										<ChatList :uid="user.uid" />
									</div>
								</nav>
							</div>
						</div>
						<div class="flex-shrink-0 w-14">
							<!-- Force sidebar to shrink to fit close icon -->
						</div>
					</div>
				</div>

				<!-- Static sidebar for desktop -->
				<div class="hidden md:flex md:flex-shrink-0">
					<div class="flex flex-col w-64">
						<div class="flex justify-between items-center h-16 flex-shrink-0 px-4 bg-gray-800">
							<h3 class="text-gray-100 text-2xl font-medium">chat</h3>
							<div class="relative z-10 flex-shrink-0 flex h-16">
								<button
									@click.stop="sidebarOpen = true"
									class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
								>
									<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 12h16M4 18h7"
										/>
									</svg>
								</button>

								<div class="ml-4 flex items-center md:ml-6">
									<div class="ml-3 relative" v-on-clickaway="menutoggleDesctop">
										<div>
											<button
												@click="openDesctop = !openDesctop"
												class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
											>
												<svg height="30px" width="30px" viewBox="0 0 36 36">
													<g id="settings" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
														<g id="Settings">
															<polygon id="Bounding-Box" points="0 36 36 36 36 0 0 0" />
															<path
																id="Fill-1"
																d="M18,11.00025 C14.1345,11.00025 11.0005,14.13425 11.0005,18.00025 C11.0005,21.86575 14.1345,24.99975 18,24.99975 C21.8655,24.99975 24.9995,21.86575 24.9995,18.00025 C24.9995,14.13425 21.8655,11.00025 18,11.00025 Z M31,17.42725 L31,18.57325 C31,19.14125 30.679,19.66025 30.171,19.91475 L28.638,20.68075 C28.2975,20.85125 28.0215,21.13725 27.8915,21.49475 C27.7675,21.83575 27.624,22.16775 27.4665,22.49175 C27.3,22.83375 27.286,23.23025 27.406,23.59175 L27.96,25.25225 C28.1395,25.79125 27.999,26.38575 27.5975,26.78725 L26.787,27.59775 C26.3855,27.99925 25.791,28.13975 25.2525,27.95975 L23.595,27.40725 C23.234,27.28725 22.837,27.30125 22.495,27.46775 C22.1705,27.62575 21.837,27.76975 21.4945,27.89425 C21.1355,28.02475 20.849,28.30125 20.6785,28.64275 L19.9145,30.17075 C19.6605,30.67875 19.141,31.00025 18.573,31.00025 L17.427,31.00025 C16.859,31.00025 16.3395,30.67875 16.0855,30.17075 L15.3215,28.64275 C15.151,28.30125 14.864,28.02475 14.5055,27.89425 C14.1625,27.76975 13.83,27.62575 13.505,27.46775 C13.163,27.30125 12.766,27.28725 12.405,27.40725 L10.7475,27.95975 C10.2085,28.13975 9.6145,27.99925 9.213,27.59775 L8.4025,26.78725 C8.0005,26.38575 7.8605,25.79125 8.04,25.25225 L8.594,23.59175 C8.714,23.23025 8.7,22.83375 8.5335,22.49175 C8.376,22.16775 8.2325,21.83575 8.1085,21.49475 C7.9785,21.13725 7.7025,20.85125 7.362,20.68075 L5.829,19.91475 C5.321,19.66025 5,19.14125 5,18.57325 L5,17.42725 C5,16.85875 5.321,16.33925 5.829,16.08525 L7.362,15.31925 C7.7025,15.14875 7.9785,14.86275 8.1085,14.50525 C8.2325,14.16425 8.376,13.83225 8.5335,13.50825 C8.7,13.16625 8.714,12.76975 8.594,12.40825 L8.04,10.74775 C7.8605,10.20875 8.0005,9.61475 8.4025,9.21275 L9.213,8.40275 C9.6145,8.00075 10.2085,7.86025 10.7475,8.04025 L12.405,8.59275 C12.766,8.71275 13.163,8.69875 13.505,8.53225 C13.83,8.37425 14.1625,8.23025 14.5055,8.10575 C14.864,7.97525 15.151,7.69875 15.3215,7.35725 L16.0855,5.82925 C16.3395,5.32125 16.859,5.00025 17.427,5.00025 L18.573,5.00025 C19.141,5.00025 19.6605,5.32125 19.9145,5.82925 L20.6785,7.35725 C20.849,7.69875 21.1355,7.97525 21.4945,8.10575 C21.837,8.23025 22.1705,8.37425 22.495,8.53225 C22.837,8.69875 23.234,8.71275 23.595,8.59275 L25.2525,8.04025 C25.791,7.86025 26.3855,8.00075 26.787,8.40275 L27.5975,9.21275 C27.999,9.61475 28.1395,10.20875 27.96,10.74775 L27.406,12.40825 C27.286,12.76975 27.3,13.16625 27.4665,13.50825 C27.624,13.83225 27.7675,14.16425 27.8915,14.50525 C28.0215,14.86275 28.2975,15.14875 28.638,15.31925 L30.171,16.08525 C30.679,16.33925 31,16.85875 31,17.42725 Z"
																fill="currentColor"
																class="text-gray-100"
															/>
														</g>
													</g>
												</svg>
											</button>
										</div>
										<div
											v-show="openDesctop"
											class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
											:class="openDesctop?'transform opacity-100 scale-100':'transform opacity-0 scale-95'"
										>
											<div class="py-1 rounded-md bg-white shadow-xs">
												<a
													@click="userProfileToggleF"
													href="#"
													class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
												>Your Profile</a>

												<a
													@click="SignOut"
													class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
												>Sign out</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-800">
							<div class="flex-1 flex">
								<div class="w-full flex md:ml-0">
									<label for="search_field" class="sr-only">Search</label>
									<div class="relative w-full text-gray-400 focus-within:text-gray-600">
										<div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
											<svg class="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
												/>
											</svg>
										</div>
										<input
											class="block w-full bg-gray-700 h-full pl-8 pr-3 py-2 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
											placeholder=" Search"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="h-0 flex-1 flex flex-col overflow-y-auto">
							<!-- Sidebar component, swap this element with another sidebar if you like -->
							<nav class="flex-1 flex flex-col justify-between px-2 py-4 bg-gray-800">
								<!-- *********************** -->
								<div class="h-full" v-if="user">
									<ChatList :uid="user.uid" />
								</div>
								<!-- *********************** -->
							</nav>
						</div>
					</div>
				</div>

				<div class="flex flex-col w-0 flex-1 overflow-hidden">
					<div class="relative z-10 flex-shrink-0 flex h-24 w-full bg-white shadow">
						<button
							@click.stop="sidebarOpen = true"
							class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
						>
							<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</button>

						<div v-if="user">
							<UserProfile :user="user" :open="userProfileToggle" v-on:Closed="userProfileToggle=false" />
						</div>

						<div class="ml-4 flex items-center md:ml-6">
							<div
								class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
							>
								<img src="http://placekitten.com/200/200" alt="avatar" class="rounded-full ml-3 h-16 w-16" />

								<div class="mt-1 ml-3">
									<div class="font-medium text-base">{{chatId}}</div>
									<div class="text-gray-800">
										<i class="fa fa-circle online"></i> 45 online
									</div>
								</div>
							</div>
						</div>
					</div>
					<main class="flex-1 relative z-0 overflow-y-auto py-2 focus:outline-none">
						<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>

						<div class="max-w-7xl h-full mx-auto px-4 sm:px-6 md:px-8">
							<!-- Replace with your content -->

							<div class="p-1 flex flex-col justify-between h-full">
								<div class="pb-4 overflow-y-scroll border-b-2 border-white mt-auto flex-1">
									<ul class="flex h-full flex-col justify-end">
										<li class="m-4" v-for="message of messages" :key="message.id">
											<!-- **************************************** -->
											<ChatMessage
												:message="message"
												:owner="user.uid===message.sender"
												v-on:ChatRoomChanged="messageCollection"
											/>

											<!-- **************************************** -->
										</li>
									</ul>
								</div>

								<div class="p-7 m-2 flex-none">
									<textarea
										v-model="newMessageText"
										name="message-to-send"
										id="message-to-send"
										placeholder="Type your message"
										rows="3"
										class="w-full py-3 px-6 rounded border-none resize-none"
									></textarea>

									<div class="flex justify-between items-center">
										<audio class="items-center w-3/5" v-if="newAudio" :src="newAudioURL" controls></audio>
										<div class="flex">
											<button
												v-if="!recorder"
												@click="record()"
												type="button"
												class="inline-flex mr-1 items-center px-3 py-2 h-10 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
											>record</button>
											<button
												v-else
												@click="stop()"
												type="button"
												class="inline-flex mr-1 items-center px-3 py-2 h-10 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
											>Stop</button>
											<button
												:disabled="(!newMessageText && !newAudio) || loading"
												@click="addMessage(user.uid)"
												type="button"
												class="inline-flex items-center ml-1 px-3 py-2 h-10 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
											>Send</button>
										</div>
									</div>
								</div>
							</div>
							<!-- /End replace -->
						</div>
					</main>
				</div>
			</div>
		</User>
	</div>
</template>

<script>
import { db, storage, auth } from "../firebase";
import { mixin as clickaway } from "vue-clickaway2";

import User from "./User";
import ChatMessage from "./ChatMessage";
import ChatList from "./ChatList";
import UserProfile from "./UserProfile";
export default {
	mixins: [clickaway],
	components: {
		User,
		ChatMessage,
		ChatList,
		UserProfile
	},
	props: ["uid"],
	data() {
		return {
			auth,
			newMessageText: "",
			loading: false,
			messages: [],
			newAudio: null,
			recorder: null,
			sidebarOpen: false,
			open: false,
			openDesctop: false,
			userProfileToggle: false,
			chats: []
		};
	},
	computed: {
		chatId() {
			return this.$route.params.id;
		},
		messageCollection() {
			const collection = db
				.doc(`chats/${this.chatId}`)
				.collection("messages");
			this.$bind(
				"messages",
				collection.orderBy("createdAt").limitToLast(15)
			);
			return collection;
		},
		newAudioURL() {
			return URL.createObjectURL(this.newAudio);
		}
	},
	firestore() {
		return {
			messages: this.messageCollection
				.orderBy("createdAt")
				.limitToLast(15),
			chats: db.collection("chats").where("owner", "==", `${this.uid}`)
		};
	},
	methods: {
		userProfileToggleF() {
			this.userProfileToggle = true;
			this.open = false;
			this.openDesctop = false;
		},
		SignOut() {
			auth.signOut();
			this.$store.commit("unsubscribe");

			this.$router.push({ name: "Login" });
		},
		menutoggle() {
			this.open = false;
		},
		menutoggleDesctop() {
			this.openDesctop = false;
		},
		async addMessage(uid) {
			this.loading = true;

			let audioURL = null;

			const { id: messageId } = this.messageCollection.doc();

			if (this.newAudio) {
				const storageRef = storage
					.ref("chats")
					.child(this.chatId)
					.child(`${messageId}.wav`);
				await storageRef.put(this.newAudio);
				audioURL = await storageRef.getDownloadURL();
			}
			await this.messageCollection.doc(messageId).set({
				text: this.newMessageText,
				sender: uid,
				createdAt: Date.now(),
				audioURL
			});
			this.loading = false;
			this.newMessageText = "";
			this.newAudio = null;
		},
		async record() {
			this.newAudio = null;
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: false
			});
			const options = { mimeType: "audio/webm" };
			const recordedChunks = [];
			this.recorder = new MediaRecorder(stream, options);
			this.recorder.addEventListener("dataavailable", e => {
				if (e.data.size > 0) {
					recordedChunks.push(e.data);
				}
			});
			this.recorder.addEventListener("stop", () => {
				this.newAudio = new Blob(recordedChunks);
				console.log(this.newAudio);
			});
			this.recorder.start();
		},
		async stop() {
			this.recorder.stop();
			this.recorder = null;
		}
	}
};
</script>

<style  >
</style>