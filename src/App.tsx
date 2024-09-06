import React, { useEffect, useState } from 'react';
import { fetchUsers } from './services/api';
import { UserTable } from './components/UserTable';
import { Button } from './components/Button/Button';
import { User } from './components/UserTable/UserTable.tsx';

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
      <h1>User List</h1>
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
