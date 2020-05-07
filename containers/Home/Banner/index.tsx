import { FC } from 'react';
import {
  BannerSection,
  Content,
  Title,
  Button,
  ImageWrapper,
  BannerImage,
} from './styles';

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
