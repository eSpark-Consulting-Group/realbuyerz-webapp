export const getFileExtension = (url) => {
  return url.split('.').pop().split('?')[0];
};
