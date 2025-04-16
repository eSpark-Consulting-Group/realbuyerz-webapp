import React from 'react';
import TooltipText from '../../global/TooltipText';

const AgentDescription = ({ description }) => {
  return (
    <TooltipText
      text={description}
      maxLength={100}
      variant="primary"
      typographyStyle={{
        width: 'auto',
        fontSize: { xs: '14px', md: '16px' },
        fontWeight: 400,
        textAlign: 'start',
        paddingBottom: '12px',
        mt: 1,
      }}
    />
  );
};
export default AgentDescription;
