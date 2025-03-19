import axios from 'axios';
import Cookies from 'js-cookie';

import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';

const apiUrl = process.env.NEXT_PUBLIC_BASE_EXPRESS_URL;

export const getMessages = async (chatIds, page) => {
  const token = Cookies.get('token');

  const endpoint = ENDPOINTS.getChatMessages;

  const requests = chatIds.map((chatId) =>
    axios.get(`${apiUrl}/${endpoint}${chatId}?page=${page}`, {
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
    throw error;
  }
};
