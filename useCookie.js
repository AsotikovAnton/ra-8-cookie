import { useState } from 'react';

export default function useCookie(key, defaultValue) {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());

  const updateCookie = (value) => {
    setCookie(value);
    setItem(key, value);
  };

  return [cookie, updateCookie];
};
