import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD1Rry6Sknq2LWfDYwRHQDKVTFaExgqvPo",
  authDomain: "fti-app.firebaseapp.com",
  databaseURL: "https://fti-app.firebaseio.com",
  projectId: "fti-app",
  storageBucket: "fti-app.appspot.com",
  messagingSenderId: "395461813066",
  appId: "1:395461813066:web:88392b448821f597bf17b3"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const storageRef = firebaseapp.storage().ref();
const db = firebaseapp.firestore();

export { storageRef, db };