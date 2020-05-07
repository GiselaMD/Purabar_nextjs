import styled, { css } from 'styled-components';

export const BgImage = css`
  height: calc(100vh - 80px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 860px) {
    height: 100vh;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  background-image: url(../img/pura_background.png);
  color: white;
  ${BgImage}
`;

export const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 40px;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 10px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  background-color: #f7eee4;
  color: #000 !important;
  text-decoration: none;
  height: 35px;
  letter-spacing: 2px;
  padding: 4px 20px;
  width: fit-content;
  border-radius: 20px;
`;
