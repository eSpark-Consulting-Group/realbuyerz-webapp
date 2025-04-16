import React from 'react';

import { PROPERTIES_BY } from '@/src/constants/AgentProfile';
import Link from 'next/link';
import TooltipText from '../global/TooltipText';

const AgentTitle = ({ count, title, link }) => {
  return (
    <Link href={link} style={{ display: 'inline-block' }}>
      <TooltipText
        maxLength={40}
        variant="h4"
        text={`${count} ${PROPERTIES_BY} ${title}`}
        typographyStyle={{
          color: '#000',
          fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '25px' },
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
      />
    </Link>
  );
};
export default AgentTitle;
