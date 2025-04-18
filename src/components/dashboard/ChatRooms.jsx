import Image from 'next/image';

import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import moment from 'moment';

import { Box, Grid, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';

import Avatar from '@/src/components/dashboard/ui-elements/Avatar';

import {
  getAttachmentsOrText,
  getFileExtension,
  lastText,
  removeReadChat,
} from '@/src/utils/chat/chatUtils';

import { FILES_EXTENSION, IMAGES_EXTENSION } from '@/src/constants/Chats';

const ChatRooms = ({
  chatRoomState,
  setSelectedChatRoom,
  selectedChatRoom,
}) => {
  const unreadChats = JSON.parse(Cookies.get('unreadChatIds') || '[]');

  const { messages } = useSelector((state) => state.chats);

  const findUnreadChat = (id) => {
    const unreadChat = unreadChats?.find((chat) => chat.chatId === id);
    return unreadChat;
  };

  const handleSelectChatRoom = (room) => {
    setSelectedChatRoom(room);
    removeReadChat(room.chatId, unreadChats);
  };

  const checkType = (attachment) => {
    const attachmentType = getFileExtension(attachment?.url);

    if (FILES_EXTENSION.includes(attachmentType)) {
      return attachmentType === 'pdf' ? (
        <PictureAsPdfIcon />
      ) : attachmentType === 'docx' ? (
        <DescriptionIcon />
      ) : (
        <Box sx={{ width: '22px', height: '22px' }}>
          <Image
            src="/icons/xlsx.svg"
            alt="xlsx"
            fill
            style={{
              objectFit: 'contain',
              filter:
                'invert(50%) sepia(10%) saturate(200%) hue-rotate(180deg)',
            }}
          />
        </Box>
      );
    } else if (IMAGES_EXTENSION.includes(attachmentType)) {
      return <InsertPhotoSharpIcon />;
    } else {
      return null;
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      sx={{
        borderRight: 'solid 1px #E4E4E4',
        paddingTop: '10px',
      }}
    >
      {chatRoomState?.map((room, roomIndex) => (
        <Box
          padding={'7px 9px'}
          display={'flex'}
          alignItems={'flex-start'}
          key={roomIndex}
          sx={{
            backgroundColor:
              selectedChatRoom?.chatId === room?.chatId && '#EDF7FF',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
          onClick={() => handleSelectChatRoom(room)}
        >
          <Avatar data={room} chat />

          <Box
            marginLeft={'10px'}
            display={'flex'}
            flex={1}
            justifyContent={'space-between'}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '18px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              >
                {room.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 300,
                  lineHeight: '15px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#909394',
                }}
              >
                {getAttachmentsOrText(room?.chatId, checkType, messages)}
              </Typography>
            </Box>

            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '12.1px',
                  color: '#909394',
                  marginBottom: '5px',
                }}
              >
                {moment(lastText(room?.chatId, messages)?.createdAt).format(
                  'hh:mm:A'
                )}
              </Typography>

              {unreadChats?.length > 0 && findUnreadChat(room.chatId) && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: '#126FAA',
                  }}
                >
                  <Typography sx={{ color: '#fff' }}>
                    {findUnreadChat(room.chatId)?.count}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ChatRooms;
