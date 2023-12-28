import DynamicAPI from '../dynamicAPI';
import { ENDPOINTS } from '@/app/constants/apiConstants';

export const login = async (loginData, jwtToken) => {
  const endpoint = ENDPOINTS.login;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method, loginData, jwtToken);

    return response;
  } catch (error) {
    console.error('Error adding profile:', error);
    throw error;
  }
};
