import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 80px;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  position: fixed;
  width: calc(100% - 80px);
  background-color: white;
`;
const Logo = styled.img`
  width: 60px;
`;
const CallToAction = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #2b1f25;
  color: white !important;
  color: white;
  text-decoration: none;
  height: 35px;
  letter-spacing: 2px;
  padding: 4px 20px;
  width: fit-content;
  border-radius: 20px;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

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
