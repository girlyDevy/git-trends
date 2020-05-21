import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAzxmCJ298Bm4xVV4u9vEETkIaLoWtJj4c",
  authDomain: "trending-repo.firebaseapp.com",
  databaseURL: "https://trending-repo.firebaseio.com",
  projectId: "trending-repo",
  storageBucket: "trending-repo.appspot.com",
  messagingSenderId: "625290762433",
  appId: "1:625290762433:web:50272141bfa659b5b51c40"
  };
firebase.initializeApp(config);
export const auth=firebase.auth()
export const provider = new firebase.auth.GithubAuthProvider();
export const db=firebase.firestore()
