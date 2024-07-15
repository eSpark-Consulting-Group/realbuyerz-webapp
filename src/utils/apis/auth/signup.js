import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const signup = async (signupData) => {
  const endpoint = ENDPOINTS.signup;
  const method = 'post';

  try {
    const response = await APIService(endpoint, method, signupData);

    return response;
  } catch (error) {
    console.error('Error: Unable to sign up:', error);
    throw error;
  }
};
