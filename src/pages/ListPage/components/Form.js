import React, { useState } from 'react';

const Form = ({ addWatchItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      addWatchItem({
        title: inputValue,
        id: +new Date(),
        completed: false,
      });

      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be watch?"
        onChange={handleInput}
        value={inputValue}
      />
    </form>
  );
};

export default Form;
