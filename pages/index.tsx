import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';

import Menu from '../containers/Home/Menu';
import HeadComponent from '../containers/Home/Head';
import Banner from '../containers/Home/Banner';
import Products from '../containers/Home/Products';
import SellingPoints from '../containers/Home/SellingPoints';
import Proposal from '../containers/Home/Proposal';
import AboutUs from '../containers/Home/AboutUs';
import Contact from '../containers/Home/Contact';
import Footer from '../containers/Home/Footer';

import stripeConfig from '../config/stripe';

interface Props {
  skus: Stripe.Sku[];
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02',
  });

  const skus = await stripe.skus.list();

  return {
    props: {
      skus: skus.data,
    },
  };
};

const HomePage: FC<Props> = ({ skus }) => {
  console.log('skus', skus);
  return (
    <>
      <HeadComponent />
      <body>
        <Menu />
        <Banner />
        <Products skus={skus} />
        <SellingPoints />
        <Proposal />
        <AboutUs />
        <Contact />
        <Footer />
      </body>
    </>
  );
};
export default HomePage;
