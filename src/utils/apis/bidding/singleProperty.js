import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const singleProperty = async (propertyData) => {
  const endpoint = ENDPOINTS.biddingSingleProperty;
  const method = 'post';

  try {
    const response = await APIService(
      endpoint,
      method,
      propertyData,
      'multipart/form-data'
    );

    return response;
  } catch (error) {
    throw error;
  }
};
