import React, { useContext } from 'react';
import User from './User';
import { Userscontext } from './context/Userscontext';

const Users = () => {
  const { users } = useContext(Userscontext);

  return (
    <section>
      {users.map((user, index) => (
        <User key={user.id} user={user} index={index} />
      ))}
    </section>
  );
};

export default Users;
