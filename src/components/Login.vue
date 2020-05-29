<template>
	<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
		<div v-if="newUser" class="sm:mx-auto sm:w-full sm:max-w-md">
			<h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
				<!-- am here i need to solve this  -->
				Sign up for new account
			</h2>
			<p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
				Or
				<a
					href="#"
					@click="newUser=false"
					class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
				>Sign in</a>
			</p>
		</div>

		<div v-else class="sm:mx-auto sm:w-full sm:max-w-md">
			<h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
				<!-- am here i need to solve this  -->
				Sign in to your account
			</h2>
			<p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
				Or
				<a
					href="#"
					@click="newUser=true"
					class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
				>Sign up</a>
			</p>
		</div>

		<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
				<div>
					<label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
					<div class="mt-1 rounded-md shadow-sm">
						<input
							id="email"
							type="email"
							v-model="email"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</div>

				<div class="mt-6">
					<label for="password" class="block text-sm font-medium leading-5 text-gray-700">Password</label>
					<div class="mt-1 rounded-md shadow-sm">
						<input
							id="password"
							type="password"
							v-model="password"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</div>

				<div class="mt-6 flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember_me"
							type="checkbox"
							class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
						/>
						<label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
					</div>

					<div class="text-sm leading-5">
						<a
							href="#"
							class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
						>Forgot your password?</a>
					</div>
				</div>

				<div class="mt-6">
					<span class="block w-full rounded-md shadow-sm">
						<button
							:class="{'is-loading':loading}"
							@click="signInOrCreateUser()"
							class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
						>{{newUser ? 'Sign Up':'Login' }}</button>
					</span>
					<p v-if="errorMessage" class="mt-2 ml-1 text-sm text-red-600">{{errorMessage}}</p>
				</div>

				<div class="mt-6">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300"></div>
						</div>
						<div class="relative flex justify-center text-sm leading-5">
							<span class="px-2 bg-white text-gray-500">Or continue Anonymously</span>
						</div>
					</div>

					<div class="mt-6 flex justify-center">
						<div>
							<span class="w-24 inline-flex rounded-md shadow-sm">
								<button
									type="button"
									@click="signInAnonymously()"
									class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
								>
									<font-awesome-icon class="h-5 w-5" icon="user-secret" />
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { auth } from "../firebase";

export default {
	data() {
		return {
			auth,
			email: "",
			password: "",
			newUser: false,
			loading: false,
			errorMessage: ""
		};
	},

	methods: {
		async signInOrCreateUser() {
			this.errorMessage = "";
			this.loading = true;
			try {
				if (this.newUser) {
					await auth.createUserWithEmailAndPassword(
						this.email,
						this.password
					);
				} else {
					await auth.signInWithEmailAndPassword(
						this.email,
						this.password
					);
				}
			} catch (error) {
				this.errorMessage = error.message;
			}
			this.loading = false;
		},
		async signInAnonymously() {
			const data = await auth.signInAnonymously();
			this.$store.commit("subscribe", data.user);

			this.$router.push({ name: "home" });
		}
	}
};
</script>

<style>
</style>