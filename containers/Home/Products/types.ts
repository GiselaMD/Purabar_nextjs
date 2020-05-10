import Stripe from 'stripe';

export type ProductsProps = {
  skus: Stripe.Sku[];
};
