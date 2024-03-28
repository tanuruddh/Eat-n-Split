import AddFriend from "./Components/AddFriend";
import React, { useEffect, useState } from 'react'
import Split from "./Components/Split";
import FriendsList from "./Components/FriendsList";


const getLocalItems = () => {
  const localItems = localStorage.getItem('friends');
  if (localItems) return JSON.parse(localStorage.getItem('friends'));

  return [];
}

function App() {

  const [friends, setFriends] = useState(getLocalItems());
  const [toggleFriends, setToggleFriends] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState();

  const handleAddFriend = (friend) => {
    setFriends(friends => [...friends, friend]);
    setToggleFriends(!toggleFriends);
  }

  const handleSelectedFriend = (friend) => {
    if (friend === selectedFriend) {
      setSelectedFriend(null);
      return;
    }
    setSelectedFriend(friend);
    setToggleFriends(false)
  }

  const setSplit = (value) => {
    setFriends(friends.map(friend => friend.name === selectedFriend.name ? { ...friend, amount: friend.amount + value } : friend));
    setSelectedFriend(null);
  }

  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends])

  return (
    <div >

      <div className='  lg:max-w-[40vw] lg:min-h-[10vh] lg:ml-[10vw] lg:mt-[10vh] '>

        <FriendsList friends={friends} handleSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />
        {
          selectedFriend &&
          <div className=" lg:absolute top-36 left-[40vw]">

            <Split selectedFriend={selectedFriend} setSplit={setSplit} />
          </div>
        }

        <button className=" lg:float-none mb-10 ml-[65vw] lg:ml-[21vw] h-[3.5rem] w-[8rem] bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl " onClick={() => { setToggleFriends(!toggleFriends); setSelectedFriend(null); }}>Add friend</button>

      </div>


      {
        toggleFriends ? <AddFriend onAddFriend={handleAddFriend} /> : <p></p>
      }
    </div>
  );
}

export default App;
