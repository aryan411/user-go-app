import React, { useEffect, useState } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "./api/userApi";
import UserForm from "./pages/UserForm/UserForm";
import UserList from "./pages/UserList/UserList";
import { User } from "./types/User";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const loadUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = async (user: User) => {
    if (editingUser) {
      const updatedUser = await updateUser(editingUser.id!, user);
      setUsers((prev) =>
        prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
      setEditingUser(null);
    } else {
      const newUser = await createUser(user);
      setUsers((prev) => [...prev, newUser]);
    }
    loadUsers();
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setEditingUser(null);
  };

  const handleEditUser = (user: User) => {
    debugger;
    setEditingUser(user);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={handleAddUser} existingUser={editingUser} />
      <UserList
        users={users}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
      />
    </div>
  );
};

export default App;
