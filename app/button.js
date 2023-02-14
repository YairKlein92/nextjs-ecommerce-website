// 'use client';
// import { cookies } from 'next/headers';
// import { getComedians } from '../database/comedians';
// import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

// export default async function Button() {
//   const comedians = await getComedians(); // it is an asynchronous function
//   const cookie = cookies().get('ticketCookie'); // you can check the exact name in the cookies in the browser
//   let cookieParsed = [];
//   if (cookie) {
//     cookieParsed = JSON.parse(cookie.value);
//     console.log(cookieParsed);
//   }

//   const ticketsInCart = comedians.map((comedian) => {
//     const ticketInCart = { ...comedian, ticketAmount: 0 };

//     // I read the cookie and find the comedian
//     const ticketAmountInCookie = cookieParsed.find(
//       (object) => comedian.id === object.id,
//     );

//     // if I find the comedian, update the ticketAmount
//     if (ticketAmountInCookie) {
//       ticketInCart.ticketAmount = ticketAmountInCookie.ticketAmount;
//     }
//     return ticketInCart;
//   });

//   return (
//     <button
//       onClick={() => {
//         const ticketCookie = getParsedCookie('ticketCookie');
//         // if cookie doesn't exist we initialize the value with 1
//         if (!ticketCookie) {
//           return;
//         }
//         const foundTicket = ticketCookie.find((comedian) => {
//           return cookie.id === comedian.id;
//         });
//         // if ticket is inside the cookie
//         if (foundTicket) {
//           foundTicket.ticketAmount--;
//           if (foundTicket.ticketAmount < 0) {
//             foundTicket.ticketAmount = 0;
//           }
//         } else {
//           return;
//         }
//         // update the cookie
//         setStringifiedCookie('ticketCookie', ticketCookie);
//       }}
//     >
//       -
//     </button>
//   );
// }
