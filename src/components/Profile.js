import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, Navigate } from 'react-router-dom';
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from '../features/session/sessionSlice';

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const loggedIn = useSelector(selectIsLoggedIn);

  // use loggedIn to return to Navigate
  if (!loggedIn) {
    return <Navigate to='/sign-up' />;
  }

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      <Outlet />
    </main>
  );
};

export default Profile;
