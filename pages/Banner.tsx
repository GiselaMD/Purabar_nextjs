import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const BannerSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
  height: calc(100vh - 68px);

  @media screen and (min-width: 2150px) {
    padding-left: 300px;
  }

  @media screen and (max-width: 1230px) {
    flex-direction: column;
    align-items: flex-end;
    height: 900px;
    padding: 80px 0 0 80px;
  }

  @media screen and (max-width: 992px) {
    height: 850px;
  }

  @media screen and (max-width: 860px) {
    height: 750px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  width: 50%;

  @media screen and (max-width: 1230px) {
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    padding-right: 40px;
  }
`;

const Title = styled.h1`
  margin: 10px 0;
  font-family: rig-solid-bold-fill, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 60px;
`;

const Button = styled(Link)`
  align-items: center;
  background-color: #2b1f25;
  color: white !important;
  text-decoration: none;
  height: 35px;
  letter-spacing: 2px;
  width: fit-content;
  border-radius: 20px;
  padding: 4px 40px !important;
  display: block;

  &:before {
    background: url('../img/btn_highlight.png') no-repeat;
    background-position: center;
    background-size: 100%;
    content: '';
    margin-top: 31px;
    height: 128px;
    width: 440px;
    left: -35px;
    z-index: -1;
    position: absolute;
  }

  @media screen and (min-width: 2150px) {
    &:before {
      left: 200px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: calc(50% - 80px);

  @media screen and (max-width: 1230px) {
    width: 60%;
  }

  @media screen and (max-width: 660px) {
    width: 65%;
    padding-top: 20px;
  }
`;

const BannerImage = styled.img`
  min-width: 200px;
  max-width: 700px;
  width: 100%;
  padding-top: 40vh;
  float: right;

  @media screen and (max-width: 1230px) {
    padding: 0;
  }
`;

const Banner: FC<{}> = () => (
  <BannerSection>
    <Content>
      <Title>A barra natural de proteína</Title>
      <p>
        Comida de verdade. <br />
        Simples. Pura.
      </p>
      <Button href="#contact">Peça a sua</Button>
    </Content>
    <ImageWrapper>
      <BannerImage src="./img/pura_banner.png" />
    </ImageWrapper>
  </BannerSection>
);

export default Banner;
