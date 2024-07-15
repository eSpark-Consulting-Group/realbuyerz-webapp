import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const loginWithGoogle = async () => {
  const endpoint = ENDPOINTS.loginWithGoogle;
  const method = 'post';

  try {
    const response = await APIService(endpoint, method);

    return response;
  } catch (error) {
    console.error('Error: Unable to loginWithGoogle with Google:', error);
    throw error;
  }
};
