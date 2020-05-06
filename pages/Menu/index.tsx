import Link from 'next/link';
import {
  HeaderContainer,
  NavBar,
  Logo,
  CallToAction,
  NavLinks,
} from './styles';

const Menu = () => (
  <HeaderContainer>
    <NavBar>
      <Link href="#">
        <Logo src="/img/pura_logo.png" />
      </Link>
      <NavLinks>
        <Link href="#selling_point">Pontos de Venda</Link>
        <Link href="#proposal">Proposta</Link>
        <Link href="#about_us">Quem somos</Link>
        <CallToAction href="#contact">Encomendar</CallToAction>
      </NavLinks>
    </NavBar>
  </HeaderContainer>
);

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

export default Menu;
