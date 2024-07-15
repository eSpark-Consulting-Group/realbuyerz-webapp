import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const forgetPassword = async (forgetPasswordData) => {
  const endpoint = ENDPOINTS.forgetPassword;
  const method = 'post';

  try {
    const response = await APIService(endpoint, method, forgetPasswordData);

    return response;
  } catch (error) {
    console.error('Error: Unable to sent reset password link:', error);
    throw error;
  }
};
