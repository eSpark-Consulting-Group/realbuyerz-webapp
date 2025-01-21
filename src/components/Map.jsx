import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useState, useCallback, useEffect } from 'react';

const defaultLocation = { lat: 37.7749, lng: -122.4194 };

export default function Map({ containerStyle, formik, location }) {
  const [map, setMap] = useState(location || defaultLocation);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (formik) {
      formik?.setFieldValue('latitude', String(map?.lat));
      formik?.setFieldValue('longitude', String(map?.lng));
    }
  }, [map]);
  const requestLocation = () => {
    if (!navigator?.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator?.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = {
          lat: position?.coords?.latitude,
          lng: position?.coords?.longitude,
        };
        setMap(currentLocation);
        setError(null);
      },
      (error) => {
        console.error('Geolocation error:', error);
        let message = '';
        switch (error?.code) {
          case error?.PERMISSION_DENIED:
            message =
              'You denied location access. Please allow it for accurate results.';
            break;
          case error?.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable. Try again later.';
            break;
          case error?.TIMEOUT:
            message = 'Location request timed out. Please try again.';
            break;
          default:
            message = 'An unknown error occurred.';
        }
        setError(message);
        setMap(location || defaultLocation);
      },
      {
        timeout: 10000,
        enableHighAccuracy: true,
      }
    );
  };

  const onLoad = useCallback(() => {
    requestLocation();
  }, [location]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerDragEnd = (event) => {
    const newPosition = {
      lat: event?.latLng?.lat(),
      lng: event?.latLng?.lng(),
    };
    setMap(location || newPosition);
  };
  const handleMapClick = (event) => {
    const newPosition = {
      lat: event?.latLng?.lat(),
      lng: event?.latLng?.lng(),
    };
    setMap(location || newPosition);
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
      <div style={{ marginBottom: '10px' }}>
        <strong>Current location:</strong>
        <p>Latitude: {map?.lat}</p>
        <p>Longitude: {map?.lng}</p>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={map}
        zoom={10}
        onClick={handleMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF
          position={map}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>
    </>
  );
}
