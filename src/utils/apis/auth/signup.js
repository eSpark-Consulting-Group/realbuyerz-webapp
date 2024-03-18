import DynamicAPI from '../dynamicAPI';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const signup = async (signupData) => {
  const endpoint = ENDPOINTS.signup;
  const method = 'post';

  try {
    const response = await DynamicAPI(endpoint, method, signupData);

    return response;
  } catch (error) {
    console.error('Error: Unable to sign up:', error);
    throw error;
  }
};
