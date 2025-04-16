import axios from 'axios';
import Cookies from 'js-cookie';
import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';

const apiUrl = process.env.NEXT_PUBLIC_BASE_EXPRESS_URL;

export const getSingleRoomMessage = async (chatId, page) => {
  const token = Cookies.get('token');
  const endpoint = ENDPOINTS.getChatMessages;

  const response = await axios.get(
    `${apiUrl}/${endpoint}${chatId}?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};
