import Stripe from 'stripe';

export type ProductProps = {
  sku: Stripe.Sku;
  numItems: number;
  onAdd: Function;
  onRemove: Function;
};
