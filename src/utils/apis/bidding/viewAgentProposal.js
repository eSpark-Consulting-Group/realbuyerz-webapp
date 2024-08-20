import { ENDPOINTS } from '@/src/services/apiService/apiEndPoints';
import APIService from '@/src/services/apiService/apiService';

export const viewAgentProposal = async (propertyId) => {
  const endpoint = `${ENDPOINTS.biddingViewAgentProposal}${propertyId}`;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method);

    return response;
  } catch (error) {
    console.error('Error: Unable to get agent proposal:', error);
    throw error;
  }
};
