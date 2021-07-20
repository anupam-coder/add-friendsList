import React, { useEffect, useState } from 'react';
import { RiCloseCircleLine, RiStarLine } from 'react-icons/ri';

const Friend = ({ friends, completeFriend, removeFriend }) => {
const Initialfriends = [...friends];

  const [highlight, setHighlight] = useState(false);
  console.log(...friends);
  return Initialfriends.map((friend, index) => (
    <div
      className={'todo-row'}
      key={index}
    >
      <div key={friend.id}>
        {friend.text}
        <div>
          {"is your friend"}
        </div>
      </div>

      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeFriend(friend.id)}
          className='delete-icon'
        />
        <RiStarLine
          onClick={()=> {
            return highlight === false ? setHighlight(true) : setHighlight(false)}
          }           
          style={highlight?{color: 'yellow'}:{color: 'white'}}
          className='star-icon'
        />
      </div>
    </div>
  ));
};

export default Friend;
