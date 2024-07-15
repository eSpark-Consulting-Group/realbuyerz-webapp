import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';
export const resetPassword = async (resetPasswordData) => {
  const endpoint = ENDPOINTS.resetPassword + resetPasswordData.token;
  const method = 'put';

  try {
    const response = await APIService(endpoint, method, resetPasswordData);

    return response;
  } catch (error) {
    console.error('Error: Unable to reset password:', error);
    throw error;
  }
};
