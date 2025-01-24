export const filterAndAddUpdatedAt = (values, allowedKeys) => {
  try {
    if (typeof values !== 'object' || values === null) {
      throw new TypeError('The "values" parameter must be a non-null object.');
    }

    if (!Array.isArray(allowedKeys)) {
      throw new TypeError('The "allowedKeys" parameter must be an array.');
    }

    const filteredValues = Object.keys(values)
      .filter((key) => allowedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    return {
      ...filteredValues,
      updated_at: new Date().toISOString(),
    };
  } catch (error) {
    console.error('An error occurred in filterAndAddUpdatedAt:', error.message);
    throw error; 
  }
};
