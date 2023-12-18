// pages/dashboard/user.js
'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const UsersDashboard = () => {
  const role = useSelector((state) => state?.auth?.signupFormData?.usertype);
  const roleType = role?.toString();

  return (
    <div>
      <h1>User Dashboard ({roleType})</h1>
      {/* Add your user dashboard content here */}
    </div>
  );
};

export default UsersDashboard;
