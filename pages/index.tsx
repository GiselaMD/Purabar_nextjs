import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Stripe from 'stripe';

import Menu from '../containers/Home/Menu';
import HeadComponent from '../containers/Home/Head';
import Banner from '../containers/Home/Banner';
import HowMuchSection from '../containers/Home/HowMuchSection';
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
  return (
    <>
      <HeadComponent />
      <body>
        <Menu />
        <Banner />
        {skus.map(sku => (
          <div key={sku.id}>
            <h1>{sku.attributes.name}</h1>

            {sku.image && (
              <img
                src={sku.image}
                style={{
                  width: '100px',
                }}
              />
            )}

            <h2>
              {Number(sku.price / 100).toFixed(2)} {sku.currency.toUpperCase()}
            </h2>

            <Link href={'/' + sku.id}>Visit Page</Link>

            <hr />
          </div>
        ))}
        <HowMuchSection />
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
