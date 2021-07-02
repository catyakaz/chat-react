import './Chat.css';
import React, { useContext, useState, useEffect } from 'react';
import Input from '../Input/Input';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../index';

function Chat({ user, loading }) {
  const { auth, firestore } = useContext(Context);
  // const [user] = useAuthState(auth);
  // const [user, loading] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt'),
  );

  const sendMessage = async (e) => {
    e.preventDefault();
    await firestore.collection('messages').add({
      id: user.uid,
      name: user.displayName,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="chat">
            <div className="chat__messages">
              {messages &&
                messages.map((message) => (
                  <Message user={user} key={message.id} message={message} />
                ))}
            </div>
          </div>

          <Input send={sendMessage} value={value} handle={handleChange} />
        </>
      )}
    </div>
  );
}

export default Chat;
