// firebase-config.js
const firebaseConfig = {
  apiKey: "AIza....",
  authDomain: "yana-app-43d76.firebaseapp.com",
  projectId: "yana-app-43d76",
  storageBucket: "yana-app-43d76.appspot.com",
  messagingSenderId: "746812065904",
  appId: "1:746812065904:web:196a90926c59edf9468cb5",
  measurementId: "G-W7E6WB8Y6D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 🔑 Services available everywhere
const db = firebase.firestore();
const auth = firebase.auth();
