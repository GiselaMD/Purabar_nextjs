import { FC } from 'react';
import Link from 'next/link';

import {
  HeaderContainer,
  NavBar,
  Logo,
  NavLinks,
  CallToAction,
  MenuLink,
} from './styles';

const Menu: FC<{}> = () => (
  <HeaderContainer>
    <NavBar>
      <Link href="#">
        <Logo src="/img/pura_logo.png" />
      </Link>
      <NavLinks>
        <MenuLink href="#selling_point">Pontos de Venda</MenuLink>
        <MenuLink href="#proposal">Proposta</MenuLink>
        <MenuLink href="#about_us">Quem somos</MenuLink>
        <CallToAction href="#contact">Encomendar</CallToAction>
      </NavLinks>
    </NavBar>
  </HeaderContainer>
);

export default Menu;

// TODO: Mobile menu

{
  /* <input type="checkbox" id="overlay-input" />

    <label for="overlay-input" id="overlay-button"><span></span></label>

    <div id="overlay">
      <ul class="mobile_link">
        <div class="nav_links_mobile">
          <a href="#selling_point">Pontos de Venda</a>
          <a href="#proposal">Proposta</a>
          <a href="#about_us">Quem somos</a>
          <a href="#contact" class="cta_button">Encomendar</a>
      </ul>
    </div> */
}
