import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // must be a string
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key) {
  Cookies.remove(key);
}

export function stringifyCookieValue(value) {
  return JSON.stringify(value);
}
