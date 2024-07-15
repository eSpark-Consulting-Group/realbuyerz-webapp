import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const login = async (loginData) => {
  const endpoint = ENDPOINTS.login;
  const method = 'post';

  try {
    const response = await APIService(endpoint, method, loginData);

    return response;
  } catch (error) {
    console.error('Error: Unable to login:', error);
    throw error;
  }
};
