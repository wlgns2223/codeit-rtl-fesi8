"use client";

import { useState } from "react";
import UserForm from "./user-form";
import UserList from "./user-list";

export default function Home() {
  const [users, setUsers] = useState<any>([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };
  return (
    <main>
      <h1>{"테스트"}</h1>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </main>
  );
}
