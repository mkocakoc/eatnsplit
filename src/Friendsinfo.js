import  Friend  from './Friend';

function Friendsinfo({data , a , selectedFriend}) {
  const friends = data;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} a={a} />
      ))}
    </ul>
  );
}

export default Friendsinfo;