import firebase from 'firebase';
const config = {
	apiKey: 'AIzaSyDclxEoyu_V4hUfILx8rAPtPQ08TMIIxKA',
	authDomain: 'pearson-glp-platform-demo.firebaseapp.com',
	databaseURL: 'https://pearson-glp-platform-demo.firebaseio.com',
	projectId: 'pearson-glp-platform-demo',
	storageBucket: '',
	messagingSenderId: '964759043519'
};

firebase.initializeApp(config);

export default firebase;
