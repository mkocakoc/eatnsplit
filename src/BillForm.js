import Button from "./Button";
import { useState } from "react";

function BillForm({selectedFriend, onSplitBill}) {
  const [Bill, setBill] = useState("");
  const [paidByuser, setPaidByuser] = useState('');
  const paidByFriend = Bill ? Bill - paidByuser : "";
  const [whoispaying, setWhoispaying] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault(whoispaying === 'user' ? paidByuser : -paidByFriend);
    if (!Bill || !paidByuser) return;
  };

 

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>
      <label>🍟 Bill Value</label>
      <input type="number" value={Bill} onChange={(e)=> setBill(Number(e.target.value))} />
      <label>🤵 Your Expense</label>
      <input type="number" value={paidByuser} onChange={(e)=> setPaidByuser(Number(e.target.value) > Bill ? paidByuser : Number(e.target.value))} />
      <label>🤼 {selectedFriend.name}'s Expense:</label>
      <input type="number" value={paidByFriend} disabled />
      <label>💸 Who paying the Bill?</label>
      <select value={whoispaying} onChange={(e)=> setWhoispaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>        
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default BillForm;