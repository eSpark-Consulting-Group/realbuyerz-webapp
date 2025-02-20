import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_BASE_EXPRESS_URL;

export const getMyChat = async () => {
  const token = Cookies.get('token');

  const endpoint = 'chat/my';
  const method = 'get';

  try {
    const response = await axios.get(`${apiUrl}/${ENDPOINTS.getAllUserChat}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error: Unable to get user proposal:', error);
    throw error;
  }
};
