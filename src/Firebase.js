import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/firestore'; //v9

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDaWaFu7PTfOH0jdl0m2s8TbkG-jL7GBSw',
	authDomain: 'twitter-clone-da62a.firebaseapp.com',
	projectId: 'twitter-clone-da62a',
	storageBucket: 'twitter-clone-da62a.appspot.com',
	messagingSenderId: '210972848841',
	appId: '1:210972848841:web:67a4ddcbbb378f0477d318',
	measurementId: 'G-45HR61S2J7',
});
const db = firebaseApp.firestore();
export default db;
