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
//take that userAuth object we got and store in our database
//this function
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //check if we get any value in the userAuth object
    if (!userAuth) return;
    //if it exists go to the db and fetch user data
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //console.log(snapShot);

    //if snapshot doesn't exist, meaning if this user doesn't exist in our 'user' database create one

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        //wrap the async request that adds the user to our database
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//what this means is we always want to trigger the google auth popup whenever we use this auth provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
//function when called allow users to sign in with google auth
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;