import './Chat.less';
import React, { useContext, useState } from 'react';
import Input from '../Input/Input';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../index';

function Chat({ user, loading }) {
  const { auth, firestore } = useContext(Context);
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
                messages.map((message) => {
                    console.log(message)
                  return (<Message user={user} key={message.createdAd} message={message} />)}
                )}
            </div>
          </div>

          <Input send={sendMessage} value={value} handle={handleChange} />
        </>
      )}
    </div>
  );
}

export default Chat;
