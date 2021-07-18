import React, { useState, useEffect, useRef } from 'react';

function FriendsPage (props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    console.log(e.target.value);
    e.preventDefault();
    fetch('http://localhost:3001/friends',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({id:Math.floor(Math.random() * 10000),
      name:e.target.value
      })
    })
    
    setInput('');
  };


  return (
    <form onSubmit={handleSubmit} className='todo-form'>        <>
          <input
            placeholder="Enter your friend's name"
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
            <button value={input} onClick={handleSubmit} className='todo-button'>
            Add Friend
          </button>

        </>
    </form>
  );
}

export default FriendsPage;
