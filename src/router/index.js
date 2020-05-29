import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import ChatRoom from "../components/ChatRoom.vue";
import Login from "../components/Login.vue";

import UIDService from "../services/storage.service";

// import auth from "../auth";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		meta: {
			public: false,
			onlyWhenLoggedOut: false,
		},
	},
	{
		path: "/chats/:id",
		name: "ChatRoom",
		component: ChatRoom,
		meta: {
			public: false,
			onlyWhenLoggedOut: false,
		},
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: {
			public: true,
			onlyWhenLoggedOut: true,
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const isPublic = to.matched.some((record) => record.meta.public);
	const onlyWhenLoggedOut = to.matched.some(
		(record) => record.meta.onlyWhenLoggedOut
	);
	const loggedIn = !!UIDService.getToken();

	if (!isPublic && !loggedIn) {
		return next({
			path: "/login",
		});
	}

	// Do not allow user to visit login page or register page if they are logged in
	if (loggedIn && onlyWhenLoggedOut) {
		return next("/");
	}

	next();
	// if (to.name !== "Login" && !loggedIn) next({ name: "Login" });
	// // else if (store.state.user !== null) next({ name: "home" });
	// else next();
});

export default router;
