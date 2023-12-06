// proposalFilterUtils.js

export const filterProposals = (item, search) => {
  return (
    search &&
    (item.amount?.toLowerCase() === search.toLowerCase() ||
      item.title?.toLowerCase() === search.toLowerCase() ||
      item.location?.propertyType.toLowerCase() === search.toLowerCase() ||
      item.location?.city.toLowerCase() === search.toLowerCase() ||
      item?.location?.location.toLowerCase() === search.toLowerCase() ||
      item.location?.purpose.toLowerCase() === search.toLowerCase())
  );
};

export const countFilteredData = (data, tabProposalStatus, search) => {
  const filteredProperties = filterPropertiesByStatus(data, tabProposalStatus);

  const filteredDataCount =
    filterDataBySearch(filteredProperties, tabProposalStatus, search)?.length ||
    (search ? 0 : data.length);

  const filteredPropertiesCount =
    tabProposalStatus === 'All' ? data.length : filteredProperties.length;

  return tabProposalStatus === 'All'
    ? filteredDataCount
    : filteredPropertiesCount;
};

export const filterDataBySearch = (data, tabProposalStatus, search) => {
  return search ? data.filter((item) => filterProposals(item, search)) : null;
};

export const filterPropertiesByStatus = (data, tabProposalStatus) => {
  return tabProposalStatus === 'All'
    ? data
    : data.filter((proposal) => proposal.proposalStatus === tabProposalStatus);
};
