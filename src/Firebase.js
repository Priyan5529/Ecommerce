import firebase from "firebase/compat/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWEfwkKNgU9QorQw14FTbuMhi3c6R3Jns",
  authDomain: "ecommerce-26f6e.firebaseapp.com",
  projectId: "ecommerce-26f6e",
  storageBucket: "ecommerce-26f6e.appspot.com",
  messagingSenderId: "1043043185408",
  appId: "1:1043043185408:web:6fe9ce49f7adfee10ef9e5"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database;