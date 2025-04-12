import Cookie from 'js-cookie';
export const removeFromStorage = () => {
  localStorage?.removeItem('token');

  Cookie?.remove('token');
  Cookie?.remove('userType');
};
