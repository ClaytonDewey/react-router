import React, { useState } from 'react';
import { editUser } from '../features/session/sessionSlice';
import { useDispatch } from 'react-redux';

const EditProfileForm = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ username: username }));
  };

  return (
    <section>
      <h2>Edit Username</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button className='primary'>Edit</button>
          </div>
        </label>
      </form>
    </section>
  );
};

export default EditProfileForm;
