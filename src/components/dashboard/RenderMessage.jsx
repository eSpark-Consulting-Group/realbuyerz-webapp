import React, { useRef, useState } from 'react';
import Avatar from '@/src/components/dashboard/ui-elements/Avatar';
import { Box, Typography } from '@mui/material';
import RenderMessageContent from './RenderMessageContent';

const RenderMessage = ({ data, isSameSenderAsPrevious, selectedChatRoom }) => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const componentRef = useRef(null);

  const handleComponentRef = (node) => {
    componentRef.current = node;
  };

  if (data?.sender === 'You') {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        marginBottom={'20px'}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <Box
            ref={handleComponentRef}
            sx={{
              backgroundColor: '#FFEEE7',
              padding: '12px 16px',
              borderRadius: '10px 10px 0px 10px',
              position: 'relative',
            }}
          >
            {data?.contentType === 'text' ? (
              <Typography sx={{ whiteSpace: 'pre-line', fontSize: '16px' }}>
                {data?.content}
              </Typography>
            ) : data?.contentType === 'image' ? (
              <RenderMessageContent data={data} />
            ) : null}
            {selectedEmoji && (
              <Box
                sx={{
                  position: 'absolute',
                  right: '10px',
                  bottom: '-15px',
                  backgroundColor: 'rgba(255, 255, 255)',
                  width: '25px',
                  height: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  boxShadow: '0px 0px 5px 2px #ccc',
                }}
              >
                <Box
                  component={'img'}
                  src={`/icons/${selectedEmoji}.svg`}
                  alt={'Reaction'}
                  sx={{ width: '15px', height: '15px', cursor: 'pointer' }}
                  onClick={() => setSelectedEmoji('')}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box display={'flex'} alignItems={'center'} marginBottom={'20px'}>
      <Box
        sx={{
          maxWidth: { xs: '90%', sm: '70%' },
          display: 'flex',
          alignItems: 'flex-start',
          position: 'relative',
          justifyContent: 'flex-start',
          minWidth: '300px',
        }}
      >
        {!isSameSenderAsPrevious && (
          <Avatar
            data={selectedChatRoom}
            minWidth={40}
            height={40}
            mobile={'none'}
            chat
          />
        )}
        <Box
          ref={handleComponentRef}
          sx={{
            marginLeft: {
              xs: '0px',
              sm: isSameSenderAsPrevious ? '56px' : '16px',
            },
            backgroundColor: '#F1F1F1',
            padding: '12px 16px',
            borderRadius: '0px 10px 10px 10px',
            position: 'relative',
          }}
        >
          {data?.contentType === 'text' ? (
            <Typography sx={{ whiteSpace: 'pre-line', fontSize: '16px' }}>
              {data?.content}
            </Typography>
          ) : data?.contentType === 'image' ? (
            <RenderMessageContent data={data} />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default RenderMessage;
