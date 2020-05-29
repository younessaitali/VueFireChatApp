import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import router from "./router";
import VueCompositionAPi from "@vue/composition-api";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUserSecret,
	faPlusCircle,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faPlusCircle, faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueCompositionAPi);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
