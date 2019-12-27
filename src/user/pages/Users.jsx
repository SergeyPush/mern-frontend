import React from "react";
import UserList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "SP",
      places: 3,
      image: "https://picsum.photos/id/237/200/300"
    }
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
};

export default User;
