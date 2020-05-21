import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyA8tzuCc2r8D2gyJTrvb1q38LWqDaRnmKY",
  authDomain: "calendar-d90e8.firebaseapp.com",
  databaseURL: "https://calendar-d90e8.firebaseio.com",
  projectId: "calendar-d90e8",
  storageBucket: "calendar-d90e8.appspot.com",
  messagingSenderId: "1083155004266",
  appId: "1:1083155004266:web:35205331886c391ddc4313"
  };
firebase.initializeApp(config);
export const auth=firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();
export const db=firebase.firestore()
