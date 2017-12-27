export const FETCH_FIREBASE_DATA = 'FETCH_FIREBASE_DATA';
export function getFirebaseData(data) {
	return {
		type: FETCH_FIREBASE_DATA,
		payload: data
	};
}
