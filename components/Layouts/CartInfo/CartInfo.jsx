import styles from './cartInfo.module.scss';
import { BTN, Link } from '../../Interface';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

const ButtonWrapper = ({ currency, showSpinner }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const amount = '2';
  const style = { layout: 'vertical' };

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className='spinner' />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

function CartInfo({ className, total }) {
  const router = useRouter();
  const currency = 'USD';
  const [open, setOpen] = useState(false);

  function handleNavigate() {
    router.push('/orders/id');
    // setOpen(true)
  }

  return (
    <div className={`${styles.cartInfo} ${className}`}>
      <h5 className={styles.title}>cart total</h5>
      <p className={styles.detail}>
        <span>subtotal:</span>
        <span className={styles.value}>${total}</span>
      </p>
      <p className={styles.detail}>
        <span>discount:</span>
        <span className={styles.value}>$0.00</span>
      </p>
      <p className={styles.detail}>
        <span>total:</span>
        <span className={styles.value}>${total}</span>
      </p>
      <BTN onClick={handleNavigate}>submit</BTN>
      {open && (
        <div style={{ maxWidth: '750px', minHeight: '200px' }}>
          <button>cash ondelivery</button>
          <PayPalScriptProvider
            options={{
              'client-id': 'test',
              components: 'buttons',
              currency: 'USD',
              'disable-funding': 'credit,card,p24',
            }}>
            <ButtonWrapper currency={currency} showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      )}
    </div>
  );
}

export default CartInfo;
