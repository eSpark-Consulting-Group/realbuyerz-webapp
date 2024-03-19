import DynamicAPI from '../dynamicAPI';
import { ENDPOINTS } from '@/src/constants/api/apiConstants';

export const forgetPassword = async (forgetPasswordData) => {
  const endpoint = ENDPOINTS.forgetPassword;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method, forgetPasswordData);

    return response;
  } catch (error) {
    console.error('Error: Unable to sent reset password link:', error);
    throw error;
  }
};
