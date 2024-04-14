import Button from './Button';

function Friend({ friend, a, selectedFriend}) {
 const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ''} >
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={friend.balance > 0 ? 'green' : friend.balance < 0 ? 'red' : ''}>

        {friend.balance < 0
          ? `You owe  ${friend.name} ${Math.abs(friend.balance)} €`
          : friend.balance > 0
            ? `${friend.name} owes you ${friend.balance} €`
            : `${friend.name} and You are even`}
      </p>
      <Button act={()=> a(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
  );
}

export default Friend;