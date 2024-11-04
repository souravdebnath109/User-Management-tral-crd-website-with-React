import React, { useState } from 'react';
import './App.css';
import Users from './components/Users';
import Newuser from './components/Newuser';
import { Userscontext } from './components/context/Userscontext';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'sourav' },
    { id: 2, name: 'gourab' }
  ]);

  return (
    <Userscontext.Provider value={{ users, setUsers }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2>User Management</h2>
        <Newuser />
        <Users />
      </div>
    </Userscontext.Provider>
  );
}

export default App;

