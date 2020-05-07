import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import stripeConfig from '../../../config/stripe';
interface Props {
  skuId: string;
  itemName: string;
}

const CheckoutButton: React.FC<Props> = ({ skuId, itemName }) => {
  async function handleClick() {
    const stripe = await loadStripe(stripeConfig.publicKey);

    const { error } = await stripe.redirectToCheckout({
      items: [{ sku: skuId, quantity: 1 }],
      successUrl: `http://localhost:3000/success?itemName=${itemName}`,
      cancelUrl: 'http://localhost:3000/canceled',
    });

    if (error) {
      console.log(error);
    }
  }
  return (
    <button role="link" onClick={handleClick}>
      Buy
    </button>
  );
};

export default CheckoutButton;
