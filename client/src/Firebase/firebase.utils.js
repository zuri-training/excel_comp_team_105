// Firebase Libraries
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBA2C0MHzEnqtn-N-1XejjzZ7G6Hiw9N10",
  authDomain: "proj-team-105-xel-comp.firebaseapp.com",
  databaseURL: "https://proj-team-105-xel-comp-default-rtdb.firebaseio.com",
  projectId: "proj-team-105-xel-comp",
  storageBucket: "proj-team-105-xel-comp.appspot.com",
  messagingSenderId: "75160864797",
  appId: "1:75160864797:web:58597d83719a6ce6645ef4",
  measurementId: "G-LXZ5XMJMHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// Project's Auth reference
const auth = getAuth(app);
// set auth reference language to local device language
auth.languageCode = "it";

// CreateUserWithEmailAndPassword
const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
// Sign In With Email And PAssword
const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Sign In / Sign Up with Google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  login_hint: "user@example.com",
  prompt: "select_account",
});
const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Monitor Auth State
const monitorAuthState = (setterFunc) => {
  const unsub = onAuthStateChanged(auth, (user) => {
    if (user) {
      const userRef = doc(database, "users", `${user.id}`);
      onSnapshot(userRef, (docSnap) => {
        setterFunc({
          id: docSnap.id,
          ...docSnap.data(),
        });
      });
    } else {
      setterFunc(user);
    }
  });
  return unsub;
};

// Create user document
const createUserProfileDocument = async (userObj, additionalData) => {
  if (!userObj) return;
  const userRef = doc(database, "users", `${userObj.id}`);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    const { displayName, email } = userObj;
    const createdAt = new Date();
    try {
      await setDoc(doc(collection(database, "users", `${userObj.id}`)), {
        displayName: displayName || additionalData,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

//  Exports
export {
  auth,
  createUser,
  signIn,
  signInWithGoogle,
  googleProvider,
  GoogleAuthProvider,
  monitorAuthState,
  createUserProfileDocument,
};
