import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCGF5O7wopzDf5qEShQEBoe66xp1TWGjiM",
  authDomain: "likedin-clone-jm.firebaseapp.com",
  projectId: "likedin-clone-jm",
  storageBucket: "likedin-clone-jm.appspot.com",
  messagingSenderId: "976951329900",
  appId: "1:976951329900:web:17433b9d73d4939a2f0449",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export  {db, auth};

