import { createSlice } from '@reduxjs/toolkit';

const chats = [];
const messages = [];
const messageWRTChatBox = []
const hasChat = ""

const initialState = { chats, messages, messageWRTChatBox, hasChat };

// function generateUniqueId(chats) {
//   let newId = (chats.length + 1).toString();
//   while (chats.some((chat) => chat.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    getAllUserChats: (state, action) => {
      state.chats = action.payload;
    },
    getAllMessages: (state, action) => {
      state.messages = action.payload;
    },
    getMessageWRTChatBox: (state, action) => {
      state.messageWRTChatBox = action.payload;
    },
    mutateHasChat: (state, action) => {
      state.hasChat = action.payload;
    },
  },
});

export const { getAllUserChats, getAllMessages, getMessageWRTChatBox, mutateHasChat } = chatsSlice.actions;
export default chatsSlice.reducer;
