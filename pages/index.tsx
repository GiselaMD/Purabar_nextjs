import { FC } from 'react';

import Menu from '../containers/Home/Menu';
import HeadComponent from '../containers/Home/Head';
import Banner from '../containers/Home/Banner';
import HowMuchSection from '../containers/Home/HowMuchSection';
import SellingPoints from '../containers/Home/SellingPoints';
import Proposal from '../containers/Home/Proposal';
import AboutUs from '../containers/Home/AboutUs';
import Contact from '../containers/Home/Contact';
import Footer from '../containers/Home/Footer';

const HomePage: FC<{}> = () => {
  return (
    <>
      <HeadComponent />
      <body>
        <Menu />
        <Banner />
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
