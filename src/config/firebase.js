import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCce_gYp80pRwsKmdOMGVSP0RKe6osdW3I",
  authDomain: "netflix-clone-1f045.firebaseapp.com",
  projectId: "netflix-clone-1f045",
  storageBucket: "netflix-clone-1f045.appspot.com",
  messagingSenderId: "681986599931",
  appId: "1:681986599931:web:d066db8ffe982fb1e5395e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };
export default db;
