import DynamicAPI from '../dynamicAPI';
import { ENDPOINTS } from '@/app/constants/apiConstants';

export const resetPassword = async (resetPasswordData) => {
  const endpoint = ENDPOINTS.resetPassword + resetPasswordData.token;
  const method = 'put';

  try {
    const response = await DynamicAPI(endpoint, method, resetPasswordData);

    return response;
  } catch (error) {
    console.error('Error: Unable to reset password:', error);
    throw error;
  }
};
