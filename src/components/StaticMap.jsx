import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from 'react';

export default function StaticMap({ containerStyle, location }) {
  const [map, setMap] = useState(location);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location || !location.lat || !location.lng) {
      setError(
        'Invalid location data. Please provide valid latitude and longitude.'
      );
    } else {
      setError(null); // Reset error if location is valid
      setMap(location); // Update map center
    }
  }, [location]);

  const onLoad = useCallback(() => {
    if (!location || !location.lat || !location.lng) {
      setError('Failed to load map. Invalid location.');
    }
  }, [location]);

  const onUnmount = useCallback(() => {
    setMap(null);
    setError(null);
  }, []);

  const requestLocation = () => {
    // Retry logic to refresh location (can be extended as needed)
    if (location && location.lat && location.lng) {
      setMap(location);
      setError(null);
    } else {
      setError('Retry failed. Location data is still invalid.');
    }
  };

  return (
    <>
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          <strong>Error:</strong> {error}
          <br />
          <button onClick={requestLocation} style={{ marginTop: '5px' }}>
            Retry
          </button>
        </div>
      )}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={map}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {map && <MarkerF position={map} />}
      </GoogleMap>
    </>
  );
}
