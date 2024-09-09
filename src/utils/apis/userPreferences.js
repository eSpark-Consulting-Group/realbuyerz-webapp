import axios from 'axios';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const saveUserPreferences = async (formData) => {
  const token = localStorage.getItem('token');
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Use the correct key names from formData.emailData
  const {
    emailNotification,
    newsLetter,      // Correct key for newsletters
    automatedReport,       // Correct key for automated report
    currencyUnit,     // Correct key for currency
    areaUnit,
  } = formData.emailData;

  // Move the console.log statements here, after destructuring
  console.log('Form Data before API call:', formData);
  console.log('Email Notification before API call:', formData.emailData.emailNotification);
  
  console.log('Form Data:', formData);

  try {
    const response = await axios.post(
      `${apiUrl}/${ENDPOINTS.preferences}`,
      {
        emailNotification,
        newsLetter,      // Use the correct field in the request payload
        automatedReport,       // Use the correct field in the request payload
        currency: currencyUnit,  // Correct field in request, map currencyUnit to currency
        areaUnit,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error('API error while saving preferences:', error);
    throw error;
  }
};
