import React from "react";
import UserList from "../components/userTable";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>User List</h1>
      <UserList />
    </div>
  );
};

export default Home;
