// components/Map.js
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

export default function Map() {
  const [map, setMap] = useState(null);

  console.log(map, 'qwqw');

  const onLoad = useCallback((map) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setMap(currentLocation);
      },
      () => null
    );
    // setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onMarkerDragEnd = async (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`
      );
      const data = await response.json();
      if (data.status === 'OK' && data.results[0]) {
        console.log(data.results[0].formatted_address, 'ywqteuqwyew');
        return data.results[0].formatted_address;
      }
      return 'Address not found';
    } catch (error) {
      console.error('Error fetching address:', error);
      return 'Error retrieving address';
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={map}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Optional Marker */}
      <MarkerF position={map} draggable={true} onDragEnd={onMarkerDragEnd} />
    </GoogleMap>
  );
}
