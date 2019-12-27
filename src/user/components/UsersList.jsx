import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = props => {
  if (props.items.length === 0) {
    return <h2 className="center">No users found</h2>;
  }
  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
