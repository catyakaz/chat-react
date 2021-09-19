import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/firestore';

firebase.initializeApp({
      apiKey: "AIzaSyDEvbSwzsCAFKrYYS_cvRCafLr36WglvpY",
      authDomain: "chat-react-1e21b.firebaseapp.com",
      projectId: "chat-react-1e21b",
      storageBucket: "chat-react-1e21b.appspot.com",
      messagingSenderId: "60852711787",
      appId: "1:60852711787:web:39844887a301032ea4dc2e",
      measurementId: "G-88ZYY4YLDV"
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

reportWebVitals();
