import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useState, useCallback, useEffect } from 'react';

const defaultLocation = { lat: 37.7749, lng: -122.4194 };

export default function Map({ containerStyle, formik, filteredUserProperty }) {
  // Parse and validate location
  const isValidCoordinate = (value) =>
    typeof value === 'number' && isFinite(value);

  // Ensure location from filteredUserProperty has higher priority
  const location = {
    lat: parseFloat(filteredUserProperty?.latitude),
    lng: parseFloat(filteredUserProperty?.longitude),
  };

  const isLocationValid =
    isValidCoordinate(location.lat) && isValidCoordinate(location.lng);

  // Set initial map state based on filteredUserProperty or default location
  const [map, setMap] = useState(isLocationValid ? location : defaultLocation);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prioritize filteredUserProperty location, and update form values if necessary
    if (isLocationValid && formik) {
      formik?.setFieldValue('latitude', String(location.lat));
      formik?.setFieldValue('longitude', String(location.lng));
      setMap(location); // Update map center
    }
  }, [location, formik, isLocationValid]);

  const requestLocation = async () => {
    if (!navigator?.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          enableHighAccuracy: true,
        });
      });

      const currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // If filteredUserProperty is invalid, use the current geolocation
      if (!isLocationValid) {
        setMap(currentLocation);
      } else {
        setMap(location); // Use filteredUserProperty location if valid
      }

      setError(null);
    } catch (err) {
      console.error('Geolocation error:', err);
      let message = '';
      switch (err?.code) {
        case err?.PERMISSION_DENIED:
          message =
            'You denied location access. Please allow it for accurate results.';
          break;
        case err?.POSITION_UNAVAILABLE:
          message = 'Location information is unavailable. Try again later.';
          break;
        case err?.TIMEOUT:
          message = 'Location request timed out. Please try again.';
          break;
        default:
          message = 'An unknown error occurred.';
      }
      setError(message);
      if (!isLocationValid) {
        setMap(defaultLocation); // Fallback to default if both are invalid
      }
    }
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

    // Update both map and Formik state
    if (isValidCoordinate(newPosition.lat) && isValidCoordinate(newPosition.lng)) {
      setMap(newPosition);
      formik?.setFieldValue('latitude', String(newPosition.lat));
      formik?.setFieldValue('longitude', String(newPosition.lng));
    }
  };

  const handleMapClick = (event) => {
    const newPosition = {
      lat: event?.latLng?.lat(),
      lng: event?.latLng?.lng(),
    };
    setMap(newPosition);
    formik?.setFieldValue('latitude', String(newPosition.lat));
    formik?.setFieldValue('longitude', String(newPosition.lng));
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
