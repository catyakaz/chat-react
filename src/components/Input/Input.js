import './Input.css';
import React from 'react';

function Input({ value, handle, send }) {
  return (
    <form onSubmit={send} className="form">
      <input
        placeholder="Напиши сообщение..."
        type="text"
        value={value}
        onChange={handle}
        className="form__input"
      ></input>
      <button type="submit" className="form__button">
        Отправить
      </button>
    </form>
  );
}

export default Input;
