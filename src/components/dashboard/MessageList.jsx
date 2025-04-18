import moment from 'moment';

import { Box } from '@mui/material';

import DashedLineText from './DashedLineText';
import RenderMessage from './RenderMessage';

const MessageList = ({ conversation, selectedChatRoom }) => {
  let prevSender = null;

  return (
    <>
      {conversation?.map((days, daysIndex) => {
        return (
          <Box key={daysIndex}>
            <DashedLineText
              text={moment(days?.date).format('dddd, D MMMM YYYY')}
            />

            {days?.messages?.map((message, msgIndex) => {
              const isSameSenderAsPrevious = prevSender === message.sender;
              prevSender = message.sender;
              return (
                <RenderMessage
                  key={msgIndex}
                  data={message}
                  selectedChatRoom={selectedChatRoom}
                  isSameSenderAsPrevious={isSameSenderAsPrevious}
                />
              );
            })}
          </Box>
        );
      })}
    </>
  );
};

export default MessageList;
