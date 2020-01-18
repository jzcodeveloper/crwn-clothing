import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDGE1gl_BuGaWC6IpqqR-u77dgEi9OQ5ks",
  authDomain: "crown-db-52d75.firebaseapp.com",
  databaseURL: "https://crown-db-52d75.firebaseio.com",
  projectId: "crown-db-52d75",
  storageBucket: "crown-db-52d75.appspot.com",
  messagingSenderId: "512323605408",
  appId: "1:512323605408:web:fc32c81985025644160ac5",
  measurementId: "G-1DF1HLHHVS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  try {
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await userRef.set({ displayName, email, createdAt, ...additionalData });
    }

    return userRef;
  } catch (error) {
    console.log("Could not create user: ", error.message);
  }
};

export const addCollectionAndItems = async (collectionKey, items) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  items.forEach(item => {
    const documentRef = collectionRef.doc();
    batch.set(documentRef, item);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return { id: doc.id, title, items };
  });

  return transformedCollection.reduce((acc, val) => {
    acc[val.title.toLowerCase()] = val;
    return acc;
  }, {});
};

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
