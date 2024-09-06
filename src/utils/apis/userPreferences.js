import axios from 'axios';
import { ENDPOINTS } from '@/src/constants/apiConstants';

export const saveUserPreferences = async (formData) => {
  const token = localStorage.getItem('token');
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { emailNotification, newsLetter, automatedReport, currency, areaUnit } =
    formData.emailData;

  try {
    const response = await axios.post(
      `${apiUrl}/${ENDPOINTS.preferences}`,
      {
        emailNotification,
        newsLetter,
        automatedReport,
        currency,
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
