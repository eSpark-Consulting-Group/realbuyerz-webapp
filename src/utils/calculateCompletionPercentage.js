export const calculateCompletionPercentage = (userProfile) => {
  if (!userProfile || typeof userProfile !== 'object') {
    throw new Error('Invalid user profile object');
  }

  const totalKeys = Object.keys(userProfile).length;
  if (totalKeys === 0) return 0; // Avoid division by zero

  const completedKeys = Object.values(userProfile).filter(value => value !== null && value !== "" && value !== undefined).length;
  return Math.round((completedKeys / totalKeys) * 100);
};