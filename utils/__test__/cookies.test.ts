import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
  stringifyCookieValue,
} from '../cookies';

// Unit: Test functions for adding and removing info from cookie
// Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
// Unit: Test cart sum function

// this is the closest to what we want to test
// testing a single, small function that doesn't depend on a library
test('stringify a cookie value', () => {
  expect(stringifyCookieValue([{ id: 1, ticketAmount: 2 }])).toBe(
    '[{"id":1,"ticketAmount":2}]',
  );
});

test('get, set and delete a cookie', () => {
  const cookie = {
    key: 'cookie',
    value: [{ id: 1, ticketAmount: 2 }],
  };
  // First we make sure that the return value of the function is undefined
  // Use .toBe to compare primitive values
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  // expect(getParsedCookie(cookie.key)).toBeUndefined();
  // Set a cookie, it has to be a function for  (not/)to throw an error
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  // Use .toStrictEqual to test that objects have the same type as well as structure
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // Best practice: clear state after test to bring the system back to the initial state
  expect(deleteCookie(cookie.key)).toBeUndefined();
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});
