<template>
	<header>
		<User v-slot:user="{user}">
			<div v-if="user">
				<ChatRoom :uid="user.uid" />
			</div>
			<!-- <Login v-else /> -->
		</User>
	</header>
</template>

<script>
// import Login from "./Login";
import User from "./User";
import ChatRoom from "./ChatRoom";
export default {
	components: { User, ChatRoom },
	data() {
		return {};
	}
};
</script>

<style>
</style>