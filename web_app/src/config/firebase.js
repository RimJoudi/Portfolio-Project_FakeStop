import firebase from 'firebase'
require('firebase/auth')
require('firebase/firestore')
const firebaseConfig = {

  apiKey: "AIzaSyB9rtIsXirqZo4i35l-6uYiyoSk_nzsCIk",

  authDomain: "fakestop-e1e3c.firebaseapp.com",

  projectId: "fakestop-e1e3c",

  storageBucket: "fakestop-e1e3c.appspot.com",

  messagingSenderId: "571689940505",

  appId: "1:571689940505:web:57ce9fe2cf50475e0f5c88"

};

const appr = firebase.initializeApp(firebaseConfig);
 
export default appr;
 //firebase@8.10.0//