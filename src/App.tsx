import React, { useEffect, useState } from 'react';
import { fetchUsers } from './services/api';
import { UserTable } from './components/UserTable';
import { Button } from './components/Button';
import { User } from './components/UserTable/UserTable.tsx';
import { Title } from './components/Title';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      console.log('Fetched users:', data);
      setUsers(data);
    });
  }, []);

  const refreshHandler = () => {
      fetchUsers().then((data) => {
          console.log('Fetched on refresh:', data);

          setUsers(data);
  })}

  return (
    <div>
      <Title>User List</Title>
      <UserTable users={users} />
      <Button
        onClick={refreshHandler}
      >
        Refresh
      </Button>
    </div>
  );
};

export default App;
