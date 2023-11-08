import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import TapMenu from './TapMenu';
import ChatMenu from './ChatMenu';
import Conversation from './Conversation';

const InboxContent = ({ data }) => {
  const [activeUserId, setActiveUserId] = useState(1);
  const [activeTab, setActiveTab] = useState('inbox');

  const handleConversationClick = (userId) => {
    setActiveUserId(userId);
  };
  const activeConversation = data.find(
    (conversation) => conversation.userId === activeUserId
  );
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        marginBottom: '15px',
        border: '1px solid #E4E4E4',
        borderRadius: '10px',
      }}
    >
      <Grid container>
        <TapMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <ChatMenu
          data={data}
          handleConversationClick={handleConversationClick}
          activeUserId={activeUserId}
          activeTab={activeTab}
        />
        <Conversation
          activeConversation={activeConversation}
          activeUserId={activeUserId}
        />
      </Grid>
    </Box>
  );
};

export default InboxContent;
