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

// export default function ComedianIntroPage({ params }) {
//   console.log(params);
//   const singleComedian = comedians.find((comedian) => {
//     return comedian.lastName.toLocaleLowerCase() === params.standupistName;
//   });
//   console.log(singleComedian);
//   if (!singleComedian) {
//     NotFound();
//   }

//   return (
//     <div className={styles.comedianDiv}>
//       <div className={styles.comedianIntro}>
//         <Image
//           src={`/${singleComedian.firstName}.webp`}
//           alt={singleComedian.lastName}
//           width="280"
//           height="200"
//         />

//         <h1>
//           {singleComedian.firstName} {singleComedian.lastName}
//         </h1>
//         <p>
//           {singleComedian.firstName} is a widely-known and even more funny{' '}
//           {singleComedian.nationality} comedian. <br />
//           {singleComedian.firstName} is {singleComedian.age} years old{' '}
//           {singleComedian.podcast !== undefined
//             ? `and is the
//           co/host of the ${singleComedian.podcast} podcast`
//             : ''}
//           . His last special is called {singleComedian.lastSpecial}. <br />
//           Now you have the opportunity to choose from one of the{' '}
//           {singleComedian.eventNumber} standup comedy nights in Vienna to watch
//           it in real life!
//           <Button />
//           <button>-</button>
//         </p>
//       </div>
//       <div>
//         <div className={styles.emoji}>
//           😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂
//         </div>
//         <YoutubeVideo />
//         <div className={styles.emoji}>
//           😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂
//         </div>
//         <div className={styles.buyMore}>
//           Buy tickets now to watch more of these fascinating comedians
//         </div>
//       </div>
//     </div>
// }

// 1,
// a = 10
// a++
// a += 1   -> these are clear, they increment by one
// ++a -> what is this?
// //////////////////////////////////////////
// 2,
// const a = 2

// if (a>0){
//   console.log('it is bigger than 0')
// } else if(a<0) {
//   console.log('it is smaller than 0')
// } else{
//   console.log('it is 0')
// }
//  // What is the difference between these these two
// if (a>0){
//   console.log('it is greater than 0')
// }
// if (a<0){
//   console.log('it is smaller than 0')
// }
// if (a=0){
//   console.log('it is 0')
// }
// ////////////////////////////////////////////////
// 3,
// 'What is a class?'
// ///////////////////////////////////////////////
// How do you get 2?
// const obj=
// {
//   a:2,
//   b:1,
// }
// ///////////////////////////////////////////////
// last question was rather a stupid one, no connection to programming, rather thinking/problem solving.
