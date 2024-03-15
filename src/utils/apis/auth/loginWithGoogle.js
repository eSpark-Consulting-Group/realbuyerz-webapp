import DynamicAPI from '../dynamicAPI';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const loginWithGoogle = async () => {
  const endpoint = ENDPOINTS.loginWithGoogle;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method);

    return response;
  } catch (error) {
    console.error('Error: Unable to loginWithGoogle with Google:', error);
    throw error;
  }
};
