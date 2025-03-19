import axios from 'axios';
import Cookies from 'js-cookie';

import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';

const apiUrl = process.env.NEXT_PUBLIC_BASE_EXPRESS_URL;

export const getMyChat = async () => {
  const token = Cookies.get('token');

  const endpoint = ENDPOINTS.getAllUserChat;

  try {
    const response = await axios.get(`${apiUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
