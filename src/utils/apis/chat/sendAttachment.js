import axios from 'axios';
import Cookies from 'js-cookie';

import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';

const apiUrl = process.env.NEXT_PUBLIC_BASE_EXPRESS_URL;

export const sendAttachment = async (body) => {
  const token = Cookies.get('token');
  const endpoint = ENDPOINTS.uploadAttachment;
  const formData = new FormData();

  formData.append('chatId', body.chatId);
  body.files.forEach((file) => {
    formData.append(`files`, file);
  });

  try {
    const response = await axios.post(`${apiUrl}/${endpoint}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
