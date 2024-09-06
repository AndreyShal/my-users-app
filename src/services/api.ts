import { User } from '../components/UserTable/UserTable.tsx';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
};
