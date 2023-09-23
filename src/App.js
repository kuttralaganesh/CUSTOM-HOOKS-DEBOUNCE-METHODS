import React, { useEffect, useState } from 'react';
import './style.css';
import useDebounce from './useDebouncesEffect';

export default function App() {
  const [value, setValue] = useState('');
  const debounce = useDebounce(value);

  useEffect(() => {
    console.log(debounce);
  }, [debounce]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </div>
  );
}
