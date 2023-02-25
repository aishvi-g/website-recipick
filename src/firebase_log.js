import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbGdiLpRtXdqNe18NjmO_dxbC-q6J_ZNI",
    authDomain: "clone-6a3b1.firebaseapp.com",
    projectId: "clone-6a3b1",
    storageBucket: "clone-6a3b1.appspot.com",
    messagingSenderId: "314188230788",
    appId: "1:314188230788:web:7c5050742a4f926313d2d1",
    measurementId: "G-BC1X33KQ9L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };