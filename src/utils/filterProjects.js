// utils.js
export function filterProjects(projects, agentId, purpose) {
  return projects.filter(
    (item) =>
      item?.user_id === agentId &&
      item?.purpose === purpose &&
      item?.status === 'submit'
  ).length;
}

export function filterProjectsWith(
  projects,
  agentId,
  purpose,
  propertyCategory
) {
  return projects.filter(
    (item) =>
      item?.user_id === agentId &&
      item?.purpose === purpose &&
      item?.propertyCategory === propertyCategory &&
      item?.status === 'submit'
  ).length;
}

export function capitalizeFirstLetter(text) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
}
