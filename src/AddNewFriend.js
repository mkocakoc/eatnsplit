import Button from "./Button";
import { useState } from 'react';

function AddNewFriend({ onAddFriend,data}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  
  function handleAddFriend(e) {
    e.preventDefault();
    if(!name || !image) return alert('Please enter a name and image url');

    let id = crypto.randomUUID();
    
    data.forEach((friend) => {
      if(friend.id === id) id = crypto.randomUUID();
    });
    const newFriend = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id: crypto.randomUUID(),
    };
    onAddFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  }

return (
  <form className="form-add-friend" onSubmit={handleAddFriend}>
    <label>🍟 Friends name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <label>🖼 Image Url</label>
    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
    <Button>Add</Button>
  </form>
);
}

export default AddNewFriend;