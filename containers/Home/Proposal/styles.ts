import styled from 'styled-components';
import { BgImage } from '../SellingPoints/styles';

export const SectionWrapper = styled.section`
  padding: 40px 40px 40px 0;
  background-image: url(../img/purabar_bakgroung.png);
  display: flex;
  align-items: center;
  ${BgImage}
`;

export const Wrapper = styled.div``;

export const BrownBox = styled.div`
  background-color: #2b1f25;
  width: fit-content;
  color: white;
  padding: 10px 40px;
  line-height: 40px;
  font-size: 28px;
`;

export const Title = styled.p`
  margin: 15px 0;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Content = styled.p`
  text-transform: uppercase;
`;
