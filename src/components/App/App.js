import './App.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Chat from '../Chat/Chat';
import React, { useContext, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../index';
import { Route, Redirect } from 'react-router-dom';

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  return (
    <div className="container">
      <Header />
      <Route path="/" exact>
        <Chat user={user} loading={loading} />
      </Route>
      {user ? <Redirect to="/" /> : <Redirect to="./sign-in" />}
    </div>
  );
}

export default App;
