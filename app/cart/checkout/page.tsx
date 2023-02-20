import styles from '../checkout/page.module.scss';

export default function CheckoutPage() {
  // The form should prevent submission with any of the above fields being empty
  // The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"

  return (
    <>
      <div className={styles.inputDiv}>
        <div data-test-id="checkout-first-name">
          <label>
            First name: <input className={styles.input} />
          </label>
        </div>
        <div data-test-id="checkout-last-name">
          <label>
            Last name: <input />
          </label>
        </div>
        <div data-test-id="checkout-checkout-email">
          <label>
            Email: <input />
          </label>
        </div>
        <div data-test-id="checkout-checkout-city">
          <label>
            City: <input />
          </label>
        </div>
        <div data-test-id="checkout-postal-code">
          <label>
            Postal code: <input />
          </label>
        </div>
        <div data-test-id="checkout-country">
          <label>
            Country: <input />
          </label>
        </div>
        <div data-test-id="checkout-credit-card">
          <label>
            Credit card: <input />
          </label>
        </div>
        <div data-test-id="checkout-expiration-date">
          <label>
            Expiration date: <input />
          </label>
        </div>
        <div data-test-id="checkout-security-code">
          <label>
            Security code: <input />
          </label>
        </div>
      </div>
      <div data-test-id="checkout-confirm-order">
        <a href="/cart/checkout/thankyou">
          <button>Confirm Order</button>
        </a>
      </div>
    </>
  );
}
