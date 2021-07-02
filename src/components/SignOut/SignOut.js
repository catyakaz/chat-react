import React, { useContext } from 'react';
import './SignOut.css';
import { Context } from '../../index';

function SignOut() {
  const { auth } = useContext(Context);

  return (
    auth.currentUser && (
      <button onClick={() => auth.signOut()} className="sign-out">
        Выйти
      </button>
    )
  );
}

export default SignOut;
