import './App.less';
import Header from '../Header/Header';
import Chat from '../Chat/Chat';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../index';
import { Redirect } from 'react-router-dom';

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  return (
    <div className="container">
      <Header />
      { !loading && !user ? <Redirect to="/sign-in" /> : <Chat user={user} loading={loading} />  }
    </div>
  );
}

export default App;
