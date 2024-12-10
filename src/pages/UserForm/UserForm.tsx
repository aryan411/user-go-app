import React, { useEffect, useState } from "react";
import { User } from "../../types/User";

interface UserFormProps {
  onSubmit: (user: User) => void;
  existingUser?: User | null;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, existingUser }) => {
  const [name, setName] = useState(existingUser?.name || "");
  const [email, setEmail] = useState(existingUser?.email || "");

  useEffect(() => {
    setName(existingUser?.name || "");
    setEmail(existingUser?.email || "");
  }, [existingUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{existingUser ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
