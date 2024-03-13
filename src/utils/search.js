export const searching = (data, searchValue) => {
  const result = data?.filter(
    (ads) =>
      ads?.location.toLowerCase()?.includes(searchValue) ||
      ads?.city?.toLowerCase()?.includes(searchValue) ||
      ads?.area?.toString()?.includes(searchValue) ||
      ads?.title.toLowerCase()?.includes(searchValue) ||
      ads?.amount?.toString()?.includes(searchValue) ||
      ads?.purpose.toLowerCase()?.includes(searchValue)
  );
  return result;
};
