export const findSpecificPost = (userPostings, id) => {
  return userPostings?.find((item) => id == item?.property_id);
};

export function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export const checkIdValidity = (id, data) => {
  return isNaN(id) || id === undefined || id === null || id === data;
};

export const findData = (id, data) => {
  return data?.filter((data) => data?.user_id == id);
};

export const getFilteredOutput = (check_Data, filterObject) => {
  const filterPurpose = check_Data?.filter(
    (item) => item?.purpose === filterObject?.purpose
  );
  const filterCity = check_Data?.filter(
    (item) => item?.city === filterObject?.city
  );
  const filterLocation = check_Data?.filter(
    (item) => item?.city === filterObject?.city
  );
  const filterPropertyType = check_Data?.filter(
    (item) => item?.propertyType === filterObject?.property_Type
  );
  const FilterOutput = [
    ...new Map(
      [
        ...filterPurpose,
        ...filterCity,
        ...filterLocation,
        ...filterPropertyType,
      ].map((item) => [item?.property_id, item])
    ).values(),
  ];
  if (
    (filterObject?.purpose !== '' && filterObject?.purpose !== undefined) ||
    (filterObject?.city !== '' && filterObject?.city !== undefined) ||
    (filterObject?.location !== '' && filterObject?.location !== undefined) ||
    (filterObject?.property_Type !== '' &&
      filterObject?.property_Type !== undefined)
  ) {
    return FilterOutput;
  } else {
    return check_Data;
  }
};

export const justifyContent = (
  all,
  active,
  draft,
  trash,
  currentTab,
  filterObject,
  length
) => {
  if (
    (currentTab === 'All' &&
      getFilteredOutput(all, filterObject)?.length <= length) ||
    (currentTab === 'Active' &&
      getFilteredOutput(active, filterObject)?.length <= length) ||
    (currentTab === 'Draft' &&
      getFilteredOutput(draft, filterObject)?.length <= length) ||
    (currentTab === 'Trash' &&
      getFilteredOutput(trash, filterObject)?.length <= length)
  ) {
    return 'center';
  } else {
    return 'start';
  }
};

export const renderAdCard = (
  all,
  active,
  draft,
  trash,
  currentTab,
  filterObject
) => {
  if (currentTab === 'All') {
    return getFilteredOutput(all, filterObject);
  } else if (currentTab === 'Active') {
    return getFilteredOutput(active, filterObject);
  } else if (currentTab === 'Draft') {
    return getFilteredOutput(draft, filterObject);
  } else if (currentTab === 'Trash') {
    return getFilteredOutput(trash, filterObject);
  } else {
    return null;
  }
};

// for proposal page

export const findProposal = (id, data, status) => {
  return data?.filter(
    (proposal) => proposal?.agent_id === id && proposal?.status === status
  );
};

export const findSome = (value, searching) => {
  const some = value
    ?.filter((saveItem) =>
      searching?.some((ad) => ad?.property_id === saveItem?.property_id)
    )
    ?.map((saveItem) => ({
      ...searching?.find((ad) => ad?.property_id === saveItem?.property_id),
      saveItem,
    }));
  return some;
};

export const JustifyForFindProposal = (
  save,
  active,
  archive,
  rejected,
  currentTab,
  trash,
  length
) => {
  if (
    (currentTab === 'Save Request' &&
      getFilteredOutput(save)?.length <= length) ||
    (currentTab === 'Active' && getFilteredOutput(active)?.length <= length) ||
    (currentTab === 'Archive' &&
      getFilteredOutput(archive)?.length <= length) ||
    (currentTab === 'Rejected' &&
      getFilteredOutput(rejected)?.length <= length) ||
    (currentTab === 'Trash' && getFilteredOutput(trash)?.length <= length)
  ) {
    return 'center';
  } else {
    return 'start';
  }
};

export const renderAdCardForProposal = (
  save,
  active,
  archive,
  rejected,
  trash,
  currentTab,
  data
) => {
  if (currentTab === 'Save Request') {
    return getFilteredOutput(save, data);
  } else if (currentTab === 'Active') {
    return getFilteredOutput(active, data);
  } else if (currentTab === 'Archive') {
    return getFilteredOutput(archive, data);
  } else if (currentTab === 'Rejected') {
    return getFilteredOutput(rejected, data);
  } else if (currentTab === 'Trash') {
    return getFilteredOutput(trash, data);
  } else {
    return null;
  }
};

export const findAgent = (id, data) => {
  return data?.find((agent) => agent?.id == id);
};

export const findSingleProposal = (id, data, status) => {
  return data?.find(
    (proposal) => proposal?.proposal_id == id && proposal?.status === status
  );
};
