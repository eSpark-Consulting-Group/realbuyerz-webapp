import APIService from '../services/apiService/apiService';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const addProperties = async (profileData) => {
  const endpoint = ENDPOINTS.addProperties;
  const method = 'post';

  try {
    const response = await APIService(endpoint, method, profileData);

    console.log('Profile added successfully:', response);
    return response;
  } catch (error) {
    console.error('Error adding profile:', error);
    throw error;
  }
};

export const fetchProperties = async () => {
  const endpoint = ENDPOINTS.properties;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method, null);

    console.log('Agent chats retrieved successfully:', response);
    return response;
  } catch (error) {
    console.error('Error fetching agent chats:', error);
    throw error;
  }
};

export const fetchAmenities = async () => {
  const endpoint = ENDPOINTS.amenities;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method, null);

    // console.log('Agent chats retrieved successfully:', response);
    return response;
  } catch (error) {
    console.error('Error fetching agent chats:', error);
    throw error;
  }
};

export const fetchPropertyTypes = async () => {
  const endpoint = ENDPOINTS.propertyType;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method, null);

    // console.log('Agent chats retrieved successfully:', response);
    return response;
  } catch (error) {
    console.error('Error fetching agent chats:', error);
    throw error;
  }
};

export const fetchMyProperties = async (params) => {
  const endpoint = ENDPOINTS.myPropertires;
  const method = 'get';

  try {
    const response = await APIService(endpoint, method, null, null, params);

    // console.log('Agent chats retrieved successfully:', response);
    return response;
  } catch (error) {
    console.error('Error fetching agent chats:', error);
    throw error;
  }
};

export const addPostListing = async (postListingdata) => {
  const endpoint = ENDPOINTS.addPostListing;
  const method = 'post';
  const contentType = 'multipart/form-data';
  try {
    const response = await APIService(
      endpoint,
      method,
      postListingdata,
      contentType
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updatePostListing = async (postListingdata) => {
  const endpoint = ENDPOINTS.updatePostListing;
  const property_Id = postListingdata.property_Id;
  const method = 'put';
  const contentType = 'multipart/form-data';
  try {
    const response = await APIService(
      `${endpoint}/${property_Id}`,
      method,
      postListingdata.formData,
      contentType
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteProperty = async (property_Id) => {
  const endpoint = ENDPOINTS.deleteProperty;
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
