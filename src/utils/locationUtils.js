export function getLocationErrorMessage(err) {
  try {
    if (!err || typeof err.code === 'undefined') {
      throw new Error('Invalid error object');
    }
    switch (err.code) {
      case err.PERMISSION_DENIED:
        return 'You denied location access. Please allow it for accurate results.';
      case err.POSITION_UNAVAILABLE:
        return 'Location information is unavailable. Try again later.';
      case err.TIMEOUT:
        return 'Location request timed out. Please try again.';
      default:
        return 'An unknown error occurred.';
    }
  } catch (error) {
    // Log error for debugging purposes
    console.error('Error in getLocationErrorMessage:', error);
    return 'An error occurred while processing the location error.';
  }
}
