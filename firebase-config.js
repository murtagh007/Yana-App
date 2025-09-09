// firebase-config.js

// ✅ Firebase configuration (from Firebase Console)
var firebaseConfig = {
  apiKey: "AIzaSyCmmmJh7xhwJ5S_aa5gDpf1z37lg2JGGu8",
  authDomain: "yana-app-43d76.firebaseapp.com",
  projectId: "yana-app-43d76",
  storageBucket: "yana-app-43d76.appspot.com",
  messagingSenderId: "746812065904",
  appId: "1:746812065904:web:196a90926c59edf9468cb5",
  measurementId: "G-W7E6WB8Y6D"
};

// ✅ Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ✅ Global references (can be used in all HTML files)
const auth = firebase.auth();
const db = firebase.firestore();

// ✅ Helper for Google Sign-In (Web only)
function signInWithGoogleWeb() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
}

// Export (for modules if needed)
window.firebaseAuth = auth;
window.firebaseDB = db;
window.signInWithGoogleWeb = signInWithGoogleWeb;
