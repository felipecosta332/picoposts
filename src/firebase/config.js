import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLUaL7sE_TqBnNy7yQdOHd7_XX7eUMxe0",
  authDomain: "picoposts.firebaseapp.com",
  projectId: "picoposts",
  storageBucket: "picoposts.appspot.com",
  messagingSenderId: "989595295289",
  appId: "1:989595295289:web:ccb601f402bcbbddf0f7e8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();