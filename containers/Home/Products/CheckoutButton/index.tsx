import React, { FC } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { Props } from './types';

import { Button } from './styles';

import stripeConfig from '../../../../config/stripe';

const CheckoutButton: FC<Props> = ({ totalItems, skus }) => {
  // TODO: validate quantity > 0
  let items = [];

  skus.forEach(item => {
    if (totalItems[item.id].value > 0) {
      items = [
        ...items,
        {
          sku: item.id,
          quantity: totalItems[item.id].value,
        },
      ];
    }
  });

  async function handleClick() {
    const stripe = await loadStripe(stripeConfig.publicKey);

    const { error } = await stripe.redirectToCheckout({
      items,
      successUrl: 'https://purabar-nextjs.now.sh/success',
      cancelUrl: 'https://purabar-nextjs.now.sh',
      submitType: 'pay',
      locale: 'pt-BR',
      shippingAddressCollection: {
        allowedCountries: ['BR'],
      },
    });

    if (error) {
      console.log(error);
    }
  }
  return (
    <Button role="link" onClick={handleClick} disabled={items.length === 0}>
      Comprar
    </Button>
  );
};

export default CheckoutButton;
