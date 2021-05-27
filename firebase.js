// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAEqoc8yssypwB0xu7EPHZA8jB1WW8qqlw",
    authDomain: "fb-clone-3424b.firebaseapp.com",
    projectId: "fb-clone-3424b",
    storageBucket: "fb-clone-3424b.appspot.com",
    messagingSenderId: "549811179978",
    appId: "1:549811179978:web:e4442349f5cd2193303f33",
    measurementId: "G-7X002L4SK6"
  };
  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();
  const db=app.firestore()
  const storage=firebase.storage();
  export {db,storage};