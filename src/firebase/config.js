import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAos4MjEaW3UZDHY_-3AOQ4fZzKL2OE9E',
  authDomain: 'e-book-c7634.firebaseapp.com',
  projectId: 'e-book-c7634',
  storageBucket: 'e-book-c7634.appspot.com',
  messagingSenderId: '503370833922',
  appId: '1:503370833922:web:abf40cd5f6fddaae75c71b',
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
