import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ChatMessage({ message, isSender }) {
  const messageStyle = {
    maxWidth: '70%',
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    wordWrap: 'break-word',
    alignSelf: isSender ? 'flex-end' : 'flex-start',
    backgroundColor: isSender ? '#dcf8c6' : '#fff',
    color: '#000',
  };

  return (
    <Box style={messageStyle}>
      {message.image && <img src={message.image} alt="Avatar" width="40" height="40" />}
      {message.name && <Typography variant="caption">{message.name}</Typography>}
      <Typography>{message.content}</Typography>
    </Box>
  );
}

function Chat({ CHAT_DATA }) {
  const chatContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  };

  return (
    <Box style={chatContainerStyle}>
      {CHAT_DATA.map((conversation, index) => (
        <div key={index}>
          {conversation.messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              isSender={message.sender === conversation.userId}
            />
          ))}
        </div>
      ))}
    </Box>
  );
}

export default Chat;
