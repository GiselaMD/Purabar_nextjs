import { SectionWrapper, Wrapper, Title, ImgWrapper } from './styles';

export const AboutUs = () => (
  <SectionWrapper id="about_us">
    <Wrapper>
      <Title>Quem Somos</Title>
      <p>
        Olá! Nós somos o Kaio e o Léo. <br />
        Os criadores da PURA.BAR. O Kaio é Nutricionista e o Léo é estudante de
        engenharia, e juntos decidimos investir em levar saúde para as pessoas.{' '}
        <br />
        Somos antes de tudo, consumidores do fitness e da vida saudável que não
        encontravam lanches que pudessem fornecer de forma equilibrada todos os
        nutrientes. <br />
        Então a solução disso foi a PURA.BAR, uma barra feita de ingredientes
        naturais. <br />
        Nossa missão é ajudar a todos que buscam melhorar sua saúde sem abrir
        mão de se alimentar com prazer.
      </p>
    </Wrapper>
    <ImgWrapper src="/img/quem_somos.png" />
  </SectionWrapper>
);

export default AboutUs;
