import { useEffect, useState } from "react";

interface UserFormProps {
  onUserAdd?: (user: any) => void;
}

function UserForm({ onUserAdd }: UserFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    onUserAdd?.({ name, email });

    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="outline-none border border-gray-300 rounded-md p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="outline-none border border-gray-300 rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
        Add User
      </button>
    </form>
  );
}

export default UserForm;
