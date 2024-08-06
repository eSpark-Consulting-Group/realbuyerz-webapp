import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const resetPasswordToken = async (resetPasswordData) => {
  const endpoint = `${ENDPOINTS.resetPasswordToken}${resetPasswordData.token}`;
  const method = 'put';

  try {
    const response = await APIService(endpoint, method, {
      password: resetPasswordData.password,
    });

    return response;
  } catch (error) {
    console.error('Error: Unable to reset password:', error);
    throw error;
  }
};
