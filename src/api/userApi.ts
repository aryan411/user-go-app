import axios from 'axios';
import { User } from '../types/User';

const API_BASE = 'http://localhost:8080/users';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const createUser = async (user: User): Promise<User> => {
  const response = await axios.post(API_BASE, user);
  return response.data;
};

export const updateUser = async (id: number, user: User): Promise<User> => {
  const response = await axios.put(`${API_BASE}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/${id}`);
};
