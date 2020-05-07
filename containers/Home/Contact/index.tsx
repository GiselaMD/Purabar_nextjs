import {
  SectionWrapper,
  Wrapper,
  Content,
  SocialButton,
  SocialLink,
  Icon,
} from './styles';

const Contact = () => (
  <SectionWrapper id="contact">
    <Wrapper>
      <Content>
        <p>Encomende suas barrinhas pelo nosso Insta ou WhatsApp!</p>
        <SocialButton>
          <SocialLink
            href="https://api.whatsapp.com/send?phone=555181297577&text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20algumas%20barrinhas%20da%20PURA!"
            target="_blank"
          >
            <Icon src="./img/whatsapp.png" /> Enviar mensagem pelo Whats
          </SocialLink>
        </SocialButton>
        <SocialButton>
          <SocialLink href="https://www.instagram.com/pura.bar" target="_blank">
            <Icon src="./img/instagram.png" /> Acessar a página do Instagram
          </SocialLink>
        </SocialButton>
      </Content>
    </Wrapper>
  </SectionWrapper>
);

export default Contact;
