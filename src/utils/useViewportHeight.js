import { useState, useEffect } from 'react';

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    let resizeTimeout;

    // Function to update the height
    const updateHeight = () => setViewportHeight(window.innerHeight);

    // Debounced resize handler
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(updateHeight, 100); // Debounce delay
    };

    // Set the initial height
    updateHeight();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener and clear the timeout
    return () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportHeight;
};

export default useViewportHeight;
