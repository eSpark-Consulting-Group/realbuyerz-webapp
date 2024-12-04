import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

const containerStyle = {
  width: '100%',
  height: '103px',
};

const defaultLocation = { lat: 37.7749, lng: -122.4194 };

export default function Map() {
  const [map, setMap] = useState(defaultLocation);
  const [error, setError] = useState(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setMap(currentLocation);
        setError(null);
      },
      (error) => {
        console.error('Geolocation error:', error);
        let message = '';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message =
              'You denied location access. Please allow it for accurate results.';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable. Try again later.';
            break;
          case error.TIMEOUT:
            message = 'Location request timed out. Please try again.';
            break;
          default:
            message = 'An unknown error occurred.';
        }
        setError(message);
        setMap(defaultLocation);
      },
      {
        timeout: 10000,
        enableHighAccuracy: true,
      }
    );
  };

  const onLoad = useCallback(() => {
    requestLocation();
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

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
        <MarkerF position={map} />
      </GoogleMap>
    </>
  );
}
