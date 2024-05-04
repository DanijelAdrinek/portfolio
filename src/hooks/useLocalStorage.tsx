'use client';

import { useEffect, useState } from 'react';

export const useLocalStorage =(
  key: string,
  initialValue: any
): [any, (value: any | ((prop: any) => any)) => void] => {
  const [storedValue, setStoredValue] = useState<any>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item) as any);
    }
    // eslint-disable-next-line
  }, []);

  const setValue = (value: any | ((prop: any) => any)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};

