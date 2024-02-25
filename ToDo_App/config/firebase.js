import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBinH9t4nAPCgwN10o8EguDzjxclFwpg28",
  authDomain: "todo-app-491b2.firebaseapp.com",
  projectId: "todo-app-491b2",
  storageBucket: "todo-app-491b2.appspot.com",
  messagingSenderId: "363135377610",
  appId: "1:363135377610:web:f9d7aa109b09c5701c9433",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
