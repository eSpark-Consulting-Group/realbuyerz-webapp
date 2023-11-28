const { addProperties, fetchProperties } = require("./properties");

const profileData = {
  // ... your profile data here ...
};

const jwtToken = getTokenFunction();

// Add properties
try {
  const addPropertiesResponse = await addProperties(profileData, jwtToken);
  console.log('Add properties response:', addPropertiesResponse);
} catch (error) {
  console.error('Error adding properties:', error);
}

// Fetch properties
try {
  const fetchPropertiesResponse = await fetchProperties(jwtToken);
  console.log('Fetch properties response:', fetchPropertiesResponse);
} catch (error) {
  console.error('Error fetching properties:', error);
}
