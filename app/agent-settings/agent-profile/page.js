import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';
import React from 'react';

const AgentProfile = () => {
  return (
    <div>
      <ProfileForm />
      <ProfilePasswordForm />
    </div>
  );
};

export default AgentProfile;
