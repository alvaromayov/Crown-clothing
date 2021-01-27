import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYGo-pPupqXnHNV1EYfoCir0sR0h34ZwQ",
    authDomain: "crown-db-c018a.firebaseapp.com",
    projectId: "crown-db-c018a",
    storageBucket: "crown-db-c018a.appspot.com",
    messagingSenderId: "296026569284",
    appId: "1:296026569284:web:8cdb91eaa9700856ea1a11",
    measurementId: "G-YR4YTJ631R"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;