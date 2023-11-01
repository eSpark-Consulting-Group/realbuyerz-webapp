import { Agent_Profile_Form_Data } from '@/app/constants/AgentProfileForm';
import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';
import React from 'react';

const AgentProfile = () => {
  return (
    <div>
      <ProfileForm data={Agent_Profile_Form_Data} />
    </div>
  );
};

export default AgentProfile;
