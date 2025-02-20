import axios from 'axios';
import Cookies from 'js-cookie';

import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

const apiUrl = process.env.NEXT_PUBLIC_BASE_EXPRESS_URL;

export const getMessages = async (chatIds, page) => {
  const token = Cookies.get('token');

  const endpoint = 'chat/my';
  const method = 'get';

  const requests = chatIds.map((chatId) =>
    axios.get(`${apiUrl}/${ENDPOINTS.getChatMessages}${chatId}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
  );

  try {
    const responses = await Promise.all(requests);
    return responses;
  } catch (error) {
    console.error('Error: Unable to get messages:', error);
    throw error;
  }
};
