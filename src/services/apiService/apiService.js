import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL; // base URL

const APIService = async (
  endpoint,
  method,
  payload,
  contentType = 'application/json',
  params
) => {
  const jwtToken = localStorage.getItem('token');

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
    response = await axios.get(url, { headers });
  } else if (method?.toLowerCase() === 'post') {
    response = await axios.post(url, payload, { headers });
  } else if (method?.toLowerCase() === 'put') {
    response = await axios.put(url, payload, { headers });
  } else if (method?.toLowerCase() === 'patch') {
    response = await axios.patch(url, { headers });
  } else if (method?.toLowerCase() === 'delete') {
    response = await axios.delete(url, { headers });
  } else {
    throw new Error('Invalid HTTP method');
  }

  return response.data;
};

export default APIService;
