import styled from 'styled-components';

import { BgImage } from '../SellingPoints/styles';

export const SectionWrapper = styled.section`
  background-image: url(../img/bars_image.png);
  display: flex;
  justify-content: center;
  align-items: center;
  ${BgImage}
`;

export const Wrapper = styled.div`
  background-color: white;
  flex: 0.5;
  border-radius: 5px;

  @media screen and (max-width: 1350px) {
    flex: 1;
  }
`;

export const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

export const SocialButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  border-radius: 10px;
  height: 35px;
  width: fit-content !important;
  border: none !important;
  background-color: #2b1f25;
  color: white !important;
  padding: 5px 12px !important;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 100%;
  padding-right: 10px;
`;
