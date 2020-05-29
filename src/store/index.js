import Vue from "vue";
import Vuex from "vuex";
import UIDService from "../services/storage.service";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		user: UIDService.getToken(),
	},
	mutations: {
		subscribe(state, user) {
			state.user = { ...user };
			JSON.stringify;
			UIDService.saveToken(JSON.stringify(user));
		},
		unsubscribe(state) {
			UIDService.removeToken();
			state.user = null;
		},
	},
});

export default store;
