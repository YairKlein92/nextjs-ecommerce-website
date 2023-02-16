// const ticketCookie = getParsedCookie('ticketCookie');
// // if cookie doesn't exist
// if (!ticketCookie) {
//   setStringifiedCookie('ticketCookie', [
//     {
//       id: 'props.ticker.id but figure out the props',
//       stars: 1,
//     },
//   ]);
// } else if (
//   ticketCookie.find((cookie) => {
//     return cookie.id === 'props.ticket.id';
//   })
// ) {
//   const foundTicket = ticketCookie.find((cookie) => {
//     return cookie.id === 'props.ticket.id';
//   });
//   foundTicket.stars++;

//   setStringifiedCookie('ticketCookie', ticketCookie);
// } else {
//   setStringifiedCookie('ticketCookie', [
//     ...ticketCookie,
//     { id: 'props.fruit.id', stars: 1 },
//   ]);
// }

// second cookie

// onClick={() => {
//   const ticketCookie = getParsedCookie('ticketCookie');
//   // if cookie doesn't exist we initialize the value with 1
//   if (!ticketCookie) {
//     setStringifiedCookie('ticketCookie', [
//       { id: 'props.ticket.id', stars: 1 },
//     ]);
//     // if there's no cookie function stop here
//     return;
//   }
//   const foundTicket = ticketCookie.find((cookie) => {
//     return cookie.id === 'props.ticket.id';
//   });
//   // if ticket is inside the cookie
//   if (foundTicket) {
//     foundTicket.stars++;
//   } else {
//     ticketCookie.push({
//       id: 'props.ticket.id but figure out the props',
//       stars: 1,
//     });
//   }
//   // update the cookie
//   setStringifiedCookie('ticketCookie', ticketCookie);
// }}

//   return (
//     <div className={styles.comedianDiv}>
//       <div className={styles.comedianIntro}>
//         <Image
//           src={`/${singleComedian.firstName}.webp`}
//           alt={singleComedian.lastName}
//           width="280"
//           height="200"
//         />

// onclick for minus button:
// onClick={() => {
//   const ticketCookie = getParsedCookie('ticketCookie');
//   // if cookie doesn't exist we initialize the value with 1
//   if (!ticketCookie) {
//     return;
//   }
//   const foundTicket = ticketCookie.find((cookie) => {
//     return cookie.id === props.comedian.id;
//   });
//   // if ticket is inside the cookie
//   if (foundTicket) {
//     foundTicket.ticketAmount--;
//     if (foundTicket.ticketAmount < 0) {
//       foundTicket.ticketAmount = 0;
//     }
//   } else {
//     return;
//   }
//   // update the cookie
//   setStringifiedCookie('ticketCookie', ticketCookie);
//   router.refresh();
// }}

// onclick for plus button
// onClick={() => {
//   const ticketCookie = getParsedCookie('ticketCookie');
//   // if cookie doesn't exist we initialize the value with 1
//   if (!ticketCookie) {
//     setStringifiedCookie('ticketCookie', [
//       { id: props.comedian.id, ticketAmount: 1 },
//     ]);
//     // if there's no cookie function stop here
//     return;
//   }
//   const foundTicket = ticketCookie.find((cookie) => {
//     return cookie.id === props.comedian.id;
//   });
//   // if ticket is inside the cookie
//   if (foundTicket) {
//     foundTicket.ticketAmount++;
//   } else {
//     ticketCookie.push({
//       id: props.comedian.id,
//       ticketAmount: 1,
//     });
//   }
//   // update the cookie
//   setStringifiedCookie('ticketCookie', ticketCookie);
//   router.refresh();
// }}
