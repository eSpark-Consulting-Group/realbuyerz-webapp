import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const profileUpdate = async (profileData) => {
  const endpoint = ENDPOINTS.profileUpdate;
  const method = 'post';

  try {
    const response = await APIService(
      endpoint,
      method,
      profileData,
      'multipart/form-data'
    );

    return response;
  } catch (error) {
    console.error('Error: Unable to update profile:', error);
    throw error;
  }
};
