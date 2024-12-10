import React from 'react';
import { User } from '../../types/User';

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete, onEdit }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => user.id && onDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
