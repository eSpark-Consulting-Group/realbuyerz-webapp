import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@/src/components/dashboard/ui-elements/Avatar';
import moment from 'moment';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import { getFileExtension } from '@/src/utils/getFileExtension';

const ChatRooms = ({ chatRoomState, setSelectedChatRoom, selectedChatRoom }) => {
  const unreadChats = JSON.parse(Cookies.get('unreadChatIds') || '[]');

  const filesExt = ["pdf", "docx", "xlsx"]
  const imagesExt = ["png", "jpg", "jpeg"]

  const { messages } = useSelector((state) => state.chats);

  const lastText = (id) => {
    const filterChatLastText = messages?.filter(msg => msg.chat === id)

    return filterChatLastText[filterChatLastText.length - 1]
  }

  const findUnreadChat = (id) => {
    const unreadChat = unreadChats?.find((chat) => chat.chatId === id)
    return unreadChat
  }

  const handleSelectChatRoom = (room) => {
    setSelectedChatRoom(room)
    removeReadChat(room.chatId)
  }

  const removeReadChat = (id) => {
    const filterChat = unreadChats?.filter(chat => chat.chatId !== id);

    if(filterChat?.length){
      Cookies.set('unreadChatIds', JSON.stringify(filterChat))
    } else {
      Cookies.remove('unreadChatIds')
    }
  }

  const getAttachmentsOrText = (id) => {
    const lastOne = lastText(id)

    if(lastOne?.attachments?.length > 0){
      return checkType(lastOne?.attachments[0])
    } else {
      return lastOne?.content
    }
  }

  const checkType = (attachment) => {
    const attachmentType = getFileExtension(attachment?.url);

    if (filesExt.includes(attachmentType)) {
      return attachmentType === 'pdf' ? (
        <PictureAsPdfIcon />
      ) : attachmentType === 'docx' ? (
        <DescriptionIcon />
      ) : (
        <Box sx={{ width: '22px', height: '22px' }}>
          <img
            src="/icons/xlsx.svg"
            alt="xlsx"
            style={{
              width: '100%',
              height: '100%',
              filter:
                'invert(50%) sepia(10%) saturate(200%) hue-rotate(180deg)',
            }}
          />
        </Box>
      );
    } else if (imagesExt.includes(attachmentType)) {
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
                {getAttachmentsOrText(room?.chatId)}
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
                {moment(lastText(room?.chatId)?.createdAt).format('hh:mm:A')}
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
