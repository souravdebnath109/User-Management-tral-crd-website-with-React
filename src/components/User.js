import React, { useContext } from 'react';
import { Userscontext } from './context/Userscontext';

const User = ({ user, index }) => {
  const { id, name } = user;
  const { users, setUsers } = useContext(Userscontext);

  const handleDelete = () => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      backgroundColor: '#F9F9F900'
    }}>
      <p>{index + 1}. {name} (ID: {id})</p>
      <button onClick={handleDelete} style={{
        padding: '5px 10px',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
      }}>
        Delete
      </button>
    </div>
  );
};

export default User;
