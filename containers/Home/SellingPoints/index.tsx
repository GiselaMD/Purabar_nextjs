import { SectionWrapper, Layer, Content, Title, Button } from './styles';

const SellingPoints = () => (
  <SectionWrapper>
    <Layer>
      <Content>
        <Title>Locais de Venda!</Title>
        <p>
          Crossfit Taura Benjamin <br />
          Crossfit Taura Silvá Só <br />
          Crossfit 4ALL <br />
          Crossfit Manada <br />
          Santo Crossfit <br />
          Ginge Crossfit <br />
          Crossfit Vitra
          <br />
        </p>
        <Button href="https://goo.gl/maps/Hh5FpzZSEMYJ5Z6s5" target="_blank">
          Ver lista completa
        </Button>
      </Content>
    </Layer>
  </SectionWrapper>
);
export default SellingPoints;
