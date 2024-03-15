export const findSpecificPost = (userPostings, id) => {
  return userPostings?.find((item) => id == item?.property_id);
};
