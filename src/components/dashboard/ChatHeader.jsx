import Image from 'next/image';

import { Box, Menu, MenuItem, Typography } from '@mui/material';

import Avatar from './ui-elements/Avatar';

import { MENU_OPTIONS } from '@/src/constants/Chats';

const ChatHeader = ({
  selectedChatRoom,
  handleClick,
  anchorEl,
  open,
  handleClose,
}) => {
  return (
    <Box
      sx={{
        padding: '12px 19px 8px',
        borderBottom: '1px solid #E4E4E4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Avatar data={selectedChatRoom} minWidth={50} height={50} chat />

        <Typography
          sx={{
            marginLeft: '5px',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
        >
          {selectedChatRoom?.title}
        </Typography>
      </Box>

      <Box sx={{ marginRight: '10px' }}>
        <Image
          width={3}
          height={15}
          alt={'dots'}
          src={'/icons/OptionsIcon.svg'}
          style={{ cursor: 'pointer' }}
          onClick={handleClick}
        />

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ marginTop: '20px', '& .MuiMenu-list': { padding: 0 } }}
        >
          {MENU_OPTIONS?.map((label, ind) => (
            <MenuItem
              key={ind}
              sx={{
                borderBottom: ind !== 3 ? '1px solid #E7E7E7' : 'none',
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default ChatHeader;
