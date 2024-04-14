import Button from "./Button";

function BillForm({selectedFriend}) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name} </h2>
      <label>🍟 Bill Value</label>
      <input type="number" />
      <label>🤵 Your Expense</label>
      <input type="number" />
      <label>🤼 {selectedFriend.name}'s Expense:</label>
      <input type="number" disabled />
      <label>💸 Who paying the Bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>        
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default BillForm;