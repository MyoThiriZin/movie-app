
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { getStorage } from "firebase/compat/storage";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxvEOtFOhb7WJbk27dvHesquGp4iSa1TY",
  authDomain: "movie-app-513e1.firebaseapp.com",
  projectId: "movie-app-513e1",
  storageBucket: "movie-app-513e1.appspot.com",
  messagingSenderId: "810962398719",
  appId: "1:810962398719:web:e891ccc6e0c001adad8bca",
  measurementId: "G-FC7QE886T4"
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// database setup
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;
let auth=firebase.auth();
let storage=firebase.storage();

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
// const storageRef = ref(storage);

export {db,timestamp,storage,auth};