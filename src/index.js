import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBjngyAkREt2J2s4YAd_uiApoQFnf5077c',
  authDomain: 'chat-react-78b4d.firebaseapp.com',
  projectId: 'chat-react-78b4d',
  storageBucket: 'chat-react-78b4d.appspot.com',
  messagingSenderId: '772822651175',
  appId: '1:772822651175:web:9312107bf02c5eedb8d902',
  measurementId: 'G-CBNZ2SZ3HW',
});

export const Context = React.createContext(null);
const firestore = firebase.firestore();
const auth = firebase.auth();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{ firebase, firestore, auth }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
