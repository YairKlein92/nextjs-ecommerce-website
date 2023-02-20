'use client';
import { useRouter } from 'next/navigation';
import { setStringifiedCookie } from '../../utils/cookies';
import styles from '../cart/page.module.scss';

// type CookieParsed = {
//   id: number;
//   ticketAmount: number;
// }[];

// type Props = {
//   params: {
//     standupistId: string;
//   };
// };
export default function Button(props) {
  const router = useRouter();
  // console.log('comedian', props.comedians);
  // console.log('cookies', props.cookieParsed);

  return (
    <button
      className={styles.buttons}
      onClick={() => {
        const cookies = props.cookieParsed;
        const filteredCookie = cookies.filter(
          (cookie) => cookie.id !== props.comedian.id,
        );

        console.log(props.comedian);
        // console.log(props.cookieParsed);

        setStringifiedCookie('ticketCookie', filteredCookie);
        router.refresh();
      }}
    >
      Remove from cart
    </button>
  );
}
