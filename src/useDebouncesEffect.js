import React, { useState, useEffect } from 'react';

const useDebounce = (input, delay = 1000) => {
  const [debounce, setDebounce] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => setDebounce(input), delay);
    return () => clearTimeout(timer);
  }, [input, delay]);
  return debounce;
};

export default useDebounce;
