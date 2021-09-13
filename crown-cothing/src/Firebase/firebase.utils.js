import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const config = {
    apiKey: "AIzaSyDb9KCKAmCl7PIkBEqcLWUccZ4AvRd5ykM",
    authDomain: "crown-db-aaf6e.firebaseapp.com",
    projectId: "crown-db-aaf6e",
    storageBucket: "crown-db-aaf6e.appspot.com",
    messagingSenderId: "754801768202",
    appId: "1:754801768202:web:712955e1616b90ec8cecf3",
    measurementId: "G-F2RD8BLZ5J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email, 
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
