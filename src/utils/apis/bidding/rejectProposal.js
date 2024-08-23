import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const rejectProposal = async (propertyId) => {
  const endpoint = `${ENDPOINTS.biddingRejectProposal}${propertyId}`;
  const method = 'post';

  try {
    const response = await APIService(endpoint, method);

    return response;
  } catch (error) {
    console.error('Error: Unable to get user proposal:', error);
    throw error;
  }
};
