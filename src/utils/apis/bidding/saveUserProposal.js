import APIService from '@/src/services/apiService/apiService';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const saveUserProposal = async (userPropsalId) => {
  const endpoint = ENDPOINTS.saveUserProperty;
  const method = 'post';
  const contentType = 'multipart/form-data';
  try {
    const response = await APIService(
      `${endpoint}/${userPropsalId}`,
      method,
      null,
      contentType
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const myProposalSaved = async () => {
  const endpoint = ENDPOINTS.myProposalSaved;
  const method = 'get';
  const contentType = 'multipart/form-data';
  try {
    const response = await APIService(endpoint, method, null, contentType);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
