import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const verifyNumber = async (body) => {
  const endpoint = ENDPOINTS.verifyNumber;
  const method = 'post';

  try {
    const response = await APIService(endpoint, method, body);

    return response;
  } catch (error) {
    console.error('Error: Unable to reset password:', error);
    throw error;
  }
};
