import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEQimzI2OwqvvJuFvJRjORCSNcQf5yRBI",
  authDomain: "beauty-app-a997b.firebaseapp.com",
  projectId: "beauty-app-a997b",
  storageBucket: "beauty-app-a997b.appspot.com",
  messagingSenderId: "466094875962",
  appId: "1:466094875962:web:73f6a864ffaf2abcd7dc03",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
