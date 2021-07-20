import React, { useEffect, useState } from 'react';
import './App.css';
import FriendSearch from './components/FriendSearch';
import FriendsList from './components/FriendsList';

function App() {
  // const [data1, setData1] = useState('');
  // useEffect(() => {fetchData()
  // },[data1]);

  // const data =    [ {
  //   "id": 1,
  //   "name": "Rahul Gupta"
  // },
  // {
  //   "id": 2,
  //   "name": "Virat Kohli"
  // },
  // {
  //   "id": 3,
  //   "name": "Leo Messi"
  // },
  // {
  //   "id": 4,
  //   "name": "Cr Ronaldo"
  // }]

// const fetchData = async () => {
//   return await fetch('http://localhost:3001/friends')
//     .then(response => response.json())
//     .then(data => setData1(data));
//   } 
  // data1.array.forEach(element => {
  //   console.log(element);
  // });
  //
//  for(const item of data1){
//  let data2=object;

//  }

//const data2 = Object.values(data1);

    return (
    <div className='todo-app'>
      <FriendsList />
    </div>
  );
}

export default App;
