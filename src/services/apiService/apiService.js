import axios from 'axios';
import Cookie from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL; // base URL

const APIService = async (
  endpoint,
  method,
  payload,
  contentType = 'application/json',
  params
) => {
  const jwtToken = localStorage.getItem('token');

  const axiosInstance = axios.create();

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage?.removeItem('token');

        Cookie?.remove('token');
        Cookie?.remove('userType');

        window.location.href = '/signin'; // Redirect to login page
      }
      return Promise.reject(error);
    }
  );

  let url = `${apiUrl}/${endpoint}`;

  const urlParam = new URL(url);

  if (params) {
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        urlParam.searchParams.append(key, params[key]);
      }
    });
    url = urlParam;
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  if (jwtToken) {
    headers['Authorization'] = `Bearer ${jwtToken}`;
    headers['Content-Type'] = contentType;
  }

  let response;

  if (method?.toLowerCase() === 'get') {
    response = await axiosInstance.get(url, { headers });
  } else if (method?.toLowerCase() === 'post') {
    response = await axiosInstance.post(url, payload, { headers });
  } else if (method?.toLowerCase() === 'put') {
    response = await axiosInstance.put(url, payload, { headers });
  } else if (method?.toLowerCase() === 'patch') {
    response = await axiosInstance.patch(url, { headers });
  } else if (method?.toLowerCase() === 'delete') {
    response = await axiosInstance.delete(url, { headers });
  } else {
    throw new Error('Invalid HTTP method');
  }

  return response.data;
};

export default APIService;
