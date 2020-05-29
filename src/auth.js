import { ref } from "@vue/composition-api";
import { auth } from "./firebase";

export default function UserAuth() {
	const user = ref(null);
	const isAuth = ref(false);
	const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
		user.value = firebaseUser;
		isAuth.value = !isAuth.value;
	});
	return { user, unsubscribe, isAuth };
}
