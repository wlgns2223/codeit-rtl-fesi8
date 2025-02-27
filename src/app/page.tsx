"use client";

import { useState } from "react";
import UserForm from "./user-form";
import UserList from "./user-list";

// User form, User list 컴포넌트를 합쳐서 렌더링
// 통합 테스트
export default function Home() {
  const [users, setUsers] = useState<any>([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };
  return (
    <main>
      <h1>{"테스트"}</h1>
      <h2>{"h2"}</h2>
      <h3>{"h3"}</h3>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </main>
  );
}
