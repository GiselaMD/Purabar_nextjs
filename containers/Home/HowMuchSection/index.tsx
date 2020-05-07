import { SectionWrapper, Wapper, Title, SubTitle } from './styles';

export const HowMuchSection = () => (
  <SectionWrapper>
    <Wapper>
      <Title>Barra de proteína</Title>
      <p>
        A barrinha pra você levar pro treino ou como aquele lanche da tarde!
      </p>
    </Wapper>
    <Wapper>
      <SubTitle>Tá, mas quanto custa?</SubTitle>
      <p>
        Cada barrinha custa 7 (sete) reais. <br />
        <br />
        A cada 11 você ganha + 1, ou seja: <br />
        R$77,00 - 12 unidades
      </p>
    </Wapper>
  </SectionWrapper>
);

export default HowMuchSection;
