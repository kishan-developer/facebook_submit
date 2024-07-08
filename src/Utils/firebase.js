
import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCKOTlRR3-MFubFNKAiWT5-wbGYbU01s8w",
    authDomain: "fb-clone-aeef5.firebaseapp.com",
    projectId: "fb-clone-aeef5",
    storageBucket: "fb-clone-aeef5.appspot.com",
    messagingSenderId: "655148329337",
    appId: "1:655148329337:web:8e66cf22be178bfe87a7a8",
    measurementId: "G-GHB2CXRRYD"
});

const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();

export { auth , provider };