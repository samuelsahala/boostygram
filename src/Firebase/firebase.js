import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "boostygram-8eea5.firebaseapp.com",
  databaseURL: "https://boostygram-8eea5.firebaseio.com",
  projectId: "boostygram-8eea5",
  storageBucket: "boostygram-8eea5.appspot.com",
  messagingSenderId: "333751489958",
  appId: "1:333751489958:web:6d10426daac127c0ab6b67",
  measurementId: "G-BKTS3B8ZC0",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
