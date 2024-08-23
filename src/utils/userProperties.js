import APIService from '../services/apiService/apiService';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const addPostRequest = async (postRequestData) => {
  const endpoint = ENDPOINTS.addPostRequest;
  const method = 'post';
  const contentType = 'application/json';
  try {
    const response = await APIService(
      endpoint,
      method,
      postRequestData,
      contentType
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchUserProperties = async (params) => {
  const endpoint = ENDPOINTS.userPropertires;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method, null, null, params);

    console.log('Agent chats retrieved successfully:', response);
    return response;
  } catch (error) {
    console.error('Error fetching agent chats:', error);
    throw error;
  }
};

export const deleteUserProperty = async (property_Id) => {
  const endpoint = ENDPOINTS.deleteUserProperty;
  const method = 'delete';
  const contentType = 'multipart/form-data';
  try {
    const response = await APIService(
      `${endpoint}/${property_Id}`,
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

export const updateUserProperty = async (userPropertyData) => {
  const endpoint = ENDPOINTS.updateUserProperty;
  const property_Id = userPropertyData.property_Id;
  const method = 'put';
  const contentType = 'multipart/form-data';
  try {
    const response = await APIService(
      `${endpoint}/${property_Id}`,
      method,
      userPropertyData.formData,
      contentType
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
