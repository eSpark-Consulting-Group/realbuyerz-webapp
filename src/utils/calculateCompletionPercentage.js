export const calculateCompletionPercentage = (userProfile) => {
  if (!userProfile || typeof userProfile !== 'object') {
    console.warn('Invalid user profile object. Returning 0%.');
    return 0;
  }

  const totalKeys = Object.keys(userProfile).length;
  if (totalKeys === 0) return 0;

  const completedKeys = Object.values(userProfile).filter(
    (value) => value !== null && value !== '' && value !== undefined
  ).length;
  return Math.round((completedKeys / totalKeys) * 100);
};
