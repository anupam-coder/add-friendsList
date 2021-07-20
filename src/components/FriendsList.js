import React, { useState } from 'react';
import FriendsPage from './FriendsPage';
import Friend from './Friend';

function FriendsList() {

 
  // const initialData = data.map(e => e.name)
//const friends = initialData;
 const [friends, setFriends] = useState([]);
  // /^\s*$/ --> regex used looking for blank/empty lines. 
  const addFriend = friend => {
    if (!friend.text || /^\s*$/.test(friend.text)) {
      return;
    }

    const newFriends = [friend, ...friends];
    setFriends(newFriends);
    console.log(...friends);

  };

  const removeFriend = id => {
    const removedArr = [...friends].filter(friend => friend.id !== id);
    console.log();
   setFriends(removedArr);
  };

  const completeFriend = id => {
    let updateFriends = friends.map(friend => {
      if (friend.id === id) {
        friend.isComplete = !friend.isComplete;
      }
      return friend;
    });
    setFriends(updateFriends);
  };


  return (
    <>
      <h1>Friends</h1>
      <FriendsPage onSubmit={addFriend} />
      <Friend
        friends={friends}
        completeFriend={completeFriend}
        removeFriend={removeFriend}
      />
    </>
  );
}

export default FriendsList;
