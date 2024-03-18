import DynamicAPI from '../dynamicAPI';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const login = async (loginData) => {
  const endpoint = ENDPOINTS.login;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method, loginData);

    return response;
  } catch (error) {
    console.error('Error: Unable to login:', error);
    throw error;
  }
};
