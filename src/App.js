import './App.css';
import AddNewFriend from './AddNewFriend';
import Friendsinfo from './Friendsinfo';
import Button from './Button';
import BillForm from './BillForm';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => { 
    setShowAddFriend(()=>!showAddFriend);
  };

  const handleAddFriend =(newFriend) => {
    setFriends((friends) => {
      return [...friends, newFriend];
    });
    setShowAddFriend(false);
  }


  function handleSelectionFriend(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend((curr) => curr?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  return (
  <div className='app'>
    <div className='sidebar'>    
        <Friendsinfo data={friends} a={handleSelectionFriend} selectedFriend={selectedFriend} /> 

        {showAddFriend && <AddNewFriend onAddFriend={handleAddFriend} data={friends} />}

        <Button act={handleShowAddFriend}>
          {showAddFriend ? 'Close': 'Add Friend'}</Button>     
    </div>
    { selectedFriend && <BillForm  selectedFriend={selectedFriend} /> }
  </div>
  );
}
