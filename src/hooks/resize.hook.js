import { useState, useEffect } from 'react';
import {
    Mobile, Tablet, Desktop
} from './screensWidth';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    Mobile: width >= Mobile,
    Tablet: width >= Tablet,
    Desktop: width >= Desktop,
  };
};