// pages/dashboard/agent.js
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const AgentDashboard = () => {
  const router = useRouter();
  const role = useSelector((state) => state?.auth?.signupFormData?.usertype);
  const roleType = role.toString();

  // Check if the user type is 'agent', otherwise redirect to the user dashboard
  if (roleType !== 'agent') {
    router.push('/user');
    return null;
  }

  return (
    <div>
      <h1>Agent Dashboard ({roleType})</h1>
      {/* Add your agent dashboard content here */}
    </div>
  );
};

export default AgentDashboard;
