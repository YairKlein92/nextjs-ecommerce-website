'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

// import { setConstantValue } from 'typescript';

export default function Cookie() {
  const [cookieOn, setCookieOn] = useState(false);
  useEffect(() => {
    // check if there is a localStorage value
    const localStorageValue = getLocalStorage('isCookieAccepted');

    // making sure if there is not localStorage value, it has a true default value
    const initialState = localStorageValue === null ? true : localStorageValue;
    setCookieOn(initialState);
  }, []);

  return (
    cookieOn && (
      <div>
        Please{' '}
        <button
          onClick={() => {
            setCookieOn(false);
            setLocalStorage('isCookieOn', false);
          }}
        >
          accept
        </button>{' '}
        our terms and conditions
      </div>
    )
  );
}
