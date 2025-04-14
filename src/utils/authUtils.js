import Cookie from 'js-cookie';

export const saveUserInformation = (data) => {
  localStorage.setItem('token', data.token);
  Cookie.set('token', data.token);
  Cookie.set('userType', data.user.role);

  const savedUserInfo = {
    email: data.user.email,
    userName: data.user.userName,
    userType: data.user.role,
  };

  return savedUserInfo;
};

export const navigateTo = (userRole, router) => {
  if (userRole === 'user') {
    router.push('/user/dashboard');
  } else if (userRole === 'agent') {
    router.push('/agent/live-bidding');
  } else {
    router.push('/404');
  }
};
