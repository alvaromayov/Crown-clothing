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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get('');

  if(!snapshot.exists) { //Creates a new document if the document doesn't exist in the database
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("There was an error", error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;