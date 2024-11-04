import React, { useState, useContext } from 'react';
import { Userscontext } from './context/Userscontext';

const Newuser = () => {
  const [username, setusername] = useState("");
  const { users, setUsers } = useContext(Userscontext);

  const handlenamechange = (event) => {
    setusername(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const newuser = { id: new Date().getTime().toString(), name: username };
    setUsers([...users, newuser]);
    setusername("");
  };

  return (
    <form onSubmit={handlesubmit} style={{ marginBottom: '20px' }}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={username}
        onChange={handlenamechange}
        required
        style={{
          padding: '8px',
          marginRight: '10px',
          borderRadius: '3px',
          border: '1px solid #ccc'
        }}
      />
      <button type="submit" style={{
        padding: '8px 15px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
      }}>
        Add User
      </button>
    </form>
  );
};

export default Newuser;
