import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.div`
  height: 80px;
`;
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  position: fixed;
  width: calc(100% - 80px);
  background-color: white;
`;
export const Logo = styled.img`
  width: 60px;
`;
export const CallToAction = styled(Link)`
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
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;
