import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from '../features/session/sessionSlice';

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const loggedIn = useSelector(selectIsLoggedIn);

  // use loggedIn to return to Navigate

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      {/* Tell React Router where to render child routes */}
    </main>
  );
};

export default Profile;
