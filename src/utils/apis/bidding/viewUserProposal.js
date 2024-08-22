import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const viewUserProposal = async (propertyId) => {
  const endpoint = `${ENDPOINTS.biddingViewUserProposal}${propertyId}`;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method);

    return response;
  } catch (error) {
    console.error('Error: Unable to get user proposal:', error);
    throw error;
  }
};
