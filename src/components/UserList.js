import UserProfile from "./UserProfile";

import "./UserList.css";

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
