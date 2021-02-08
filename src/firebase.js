import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAqwQD2rx-8NCQvbDxBYwojC8u1ip6ZGzA",
    authDomain: "netflix-clone-b21c3.firebaseapp.com",
    projectId: "netflix-clone-b21c3",
    storageBucket: "netflix-clone-b21c3.appspot.com",
    messagingSenderId: "471039819096",
    appId: "1:471039819096:web:a4136a77c2d77665a1392d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;