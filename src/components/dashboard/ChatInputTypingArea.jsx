import dynamic from 'next/dynamic';

import { Box } from '@mui/material';

import { handleKeyPress } from '@/src/utils/chat/chatUtils';

const AudioRecorder = dynamic(() => import('./AudioRecorder'), {
  ssrc: false,
});

const ChatInputTypingArea = ({
  isSendingVoiceNote,
  handleCancelSendingAudio,
  sendMessage,
  setMessage,
  message,
  messageFieldRef,
  socket2,
  dataToSend,
}) => {
  const handleInput = () => {
    const content = messageFieldRef.current.innerHTML;

    setMessage(content);

    if (content.trim().length > 0 || content !== '<br>') {
      socket2.emit('START_TYPING', dataToSend);
    } else {
      socket2.emit('STOP_TYPING', dataToSend);
    }
  };

  const handleBlur = () => {
    setMessage(messageFieldRef.current.innerHTML);
  };

  return (
    <Box sx={{ padding: '0 10px', width: '100%' }}>
      {isSendingVoiceNote ? (
        <AudioRecorder handleCancelSendingAudio={handleCancelSendingAudio} />
      ) : (
        <Box
          className={'contentEditable'}
          contentEditable
          onInput={handleInput}
          onKeyDown={(e) => handleKeyPress(e, sendMessage, setMessage, message)}
          aria-label="Type your message..."
          aria-placeholder="Type your message..."
          ref={messageFieldRef}
          onBlur={handleBlur}
          onFocus={() => messageFieldRef.current.focus()}
          suppressContentEditableWarning={true}
        >
          {message.trim() === '' &&
            document?.activeElement !== messageFieldRef.current && (
              <div className={'placeholder'}>Write message</div>
            )}
        </Box>
      )}
    </Box>
  );
};

export default ChatInputTypingArea;
