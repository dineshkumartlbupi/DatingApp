// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0HryMTkHOI913qkONW7ljRCiSZJTy4zw",
  authDomain: "msgless-bb2db.firebaseapp.com",
  projectId: "msgless-bb2db",
  storageBucket: "msgless-bb2db.appspot.com",
  messagingSenderId: "949979854608",
  appId: "1:949979854608:android:dfa4f5645aef0514069795",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
