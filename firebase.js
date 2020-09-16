import firebase from "firebase";
import "firebase/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyDVfJDhcOqy-wY0tGfuaz1TfnM_4T2acwc",
  authDomain: "native-application-c0e07.firebaseapp.com",
  databaseURL: "https://native-application-c0e07.firebaseio.com",
  projectId: "native-application-c0e07",
  storageBucket: "native-application-c0e07.appspot.com",
  messagingSenderId: "855315490852",
  appId: "1:855315490852:web:fc505462fec3e42bb690b1",
  measurementId: "G-7YTEZXJYD9",
});
const db = firebase.firestore();
export default db;
