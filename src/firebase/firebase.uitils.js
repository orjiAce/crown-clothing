import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config =
    {
        apiKey: "AIzaSyDAg48RwpRwahm71WApa5YUoh5aLBB0nXg",
        authDomain: "crown-db-264aa.firebaseapp.com",
        databaseURL: "https://crown-db-264aa.firebaseio.com",
        projectId: "crown-db-264aa",
        storageBucket: "crown-db-264aa.appspot.com",
        messagingSenderId: "227574728081",
        appId: "1:227574728081:web:b812c01a33e0c631ebc630"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//what this means is we always want to trigger the google auth popup whenever we use this auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;