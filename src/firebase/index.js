import firebase from "firebase/app";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_WIHx5GWiONwwXVEEO9hD280-KtrB9wg",
    authDomain: "upload-img-shoes.firebaseapp.com",
    projectId: "upload-img-shoes",
    storageBucket: "upload-img-shoes.appspot.com",
    messagingSenderId: "312938949405",
    appId: "1:312938949405:web:0013f2ef9e9137f0098ff4",
    measurementId: "G-QT5CJBYVLJ"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }; 