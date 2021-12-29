import React, { useEffect, useState } from "react";
import axios from "axios";
export default function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
