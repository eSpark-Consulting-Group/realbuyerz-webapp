import { useJsApiLoader } from '@react-google-maps/api';

// Define a list of libraries to load from the Google Maps API
const libraries = ['places', 'geometry'];

export function MapProvider({ children }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: libraries,
  });

  if (loadError) return <p>Error loading Google Maps</p>;
  if (!scriptLoaded) return <p>Loading Google Maps...</p>;

  return children;
}
