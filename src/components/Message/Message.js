import React from 'react';
import './Message.less';

function Message({ message, user }) {
  return (
    <div
      className={`message ${
        user && message.id === user.uid
          ? 'message__user_type_auth'
          : 'message__user_type_notAuth'
      }`}
    >
      <p className="message__name">{message.name}</p>
      <p className="message__text">{message.text}</p>
    </div>
  );
}

export default Message;
