import { useState, useEffect } from 'react';

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    let resizeTimeout;

    const updateHeight = () => setViewportHeight(window.innerHeight);

    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(updateHeight, 100);
    };

    updateHeight();

    window.addEventListener('resize', handleResize);

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
