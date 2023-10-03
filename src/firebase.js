import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDPxVZdGrHbfTfsOgP9pKGDbZOLHYXAMls",
    authDomain: "website-f7112.firebaseapp.com",
    databaseURL: "https://website-f7112-default-rtdb.firebaseio.com",
    projectId: "website-f7112",
    storageBucket: "website-f7112.appspot.com",
    messagingSenderId: "425454746382",
    appId: "1:425454746382:web:2d6a3ff70913acd553b55f"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default database;