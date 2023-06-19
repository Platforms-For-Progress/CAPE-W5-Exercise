import "./UserProfile.css";

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="user-emoji">{user.emoji}</div>
      <h3>{user.name}</h3>
      <p>
        <span role="img" aria-label="email">
          📧
        </span>{" "}
        {user.email}
      </p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
