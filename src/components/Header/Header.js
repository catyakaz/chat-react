import './Header.css';
import Logo from '../../images/logo.png';
import { Context } from '../../index';
import React, { useContext } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Switch, Route } from 'react-router-dom';
import firebase from 'firebase';

function Header() {
  const { auth } = useContext(Context);
  // const [user] = useAuthState(auth);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="Логотип" />
      <Switch>
        <Route path="/" exact>
          {auth.currentUser && (
            <button onClick={() => auth.signOut()} className="header__sign">
              Выйти
            </button>
          )}
        </Route>
        <Route path="/sign-in">
          <button onClick={login} className="header__sign">
            Войти
          </button>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;