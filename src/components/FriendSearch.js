import { useEffect, useState } from "react";

const FriendSearch = () =>{
    const [friendsData, setFriendsData] = useState('');
    const [input, setInput] = useState('');

    const fetchData = async () => {
        return await fetch('http://localhost:3001/friends')
          .then(response => response.json())
          .then(data => {
            data.map((e,i) => {
                setFriendsData(e);
                setInput(e.name);
            })
           });
        }
        useEffect(() => {fetchData()
        },[]);


const updateInput = async(input)=>{
    const filtered = friendsData.filter(friend => {
        return friend.name.toLowerCase().includes(input.toLowerCase())
       })
        }
           return (
            <>
           {/* <Friend friends={updateInput}/> */}
            </>
           );

}

export default FriendSearch;