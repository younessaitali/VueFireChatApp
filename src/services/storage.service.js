const UID = "access_token";

/**
 * Manage the how Access Tokens are being stored and retrieved from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instance.
 **/
const TokenService = {
	getToken() {
		return JSON.parse(localStorage.getItem(UID));
	},

	saveToken(accessUid) {
		localStorage.setItem(UID, accessUid);
	},

	removeToken() {
		localStorage.removeItem(UID);
	},
};

export default TokenService;
