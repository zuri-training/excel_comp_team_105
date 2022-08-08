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
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

// Firebase config object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// Project's Auth reference
const auth = getAuth(app);
// set auth reference language to local device language
auth.languageCode = "it";

// CreateUserWithEmailAndPassword
const createUser = (email, password) => {
  console.log(email, password);
  return createUserWithEmailAndPassword(auth, email, password);
};
// Sign In With Email And PAssword
const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Sign In / Sign Up with Google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  login_hint: "user@example.com",
  prompt: "select_account",
});
const signInWithGoogle = () => {
  console.log("Clicked");
  return signInWithPopup(auth, googleProvider);
};

// Monitor Auth State
const monitorAuthState = (setterFunc) => {
  const unsub = onAuthStateChanged(auth, (user) => {
    if (user) {
      const userRef = doc(database, "users", `${user.uid}`);
      onSnapshot(userRef, (docSnap) => {
        // console.log(docSnap.id, docSnap.data(), docSnap);
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
  const userRef = doc(database, "users", `${userObj.uid}`);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    const { displayName, email, photoURL, uid } = userObj;
    const createdAt = new Date();
    try {
      await setDoc(doc(database, "users", `${userObj.uid}`), {
        uid,
        displayName: displayName || additionalData || "User",
        email,
        photoURL: photoURL || null,
        createdAt,
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
