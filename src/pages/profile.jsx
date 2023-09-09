import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="user-profile-container">
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
        {/* <p className="user-role">{user?.role}</p> */}
        {/* here will be the code a "change password" button */}
     </div>
    )
  )
}