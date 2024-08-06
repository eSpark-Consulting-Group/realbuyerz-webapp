import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const userProfile = async () => {
  const endpoint = ENDPOINTS.userProfile;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method);

    return response;
  } catch (error) {
    console.error('Error: Unable to user profile:', error);
    throw error;
  }
};
