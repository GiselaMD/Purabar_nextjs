import { FC } from 'react';

import HeadComponent from './Head';
import Menu from './Menu';
import Banner from './Banner';

const HomePage: FC<{}> = () => {
  return (
    <div className="container">
      <HeadComponent />
      <body>
        <Menu />
        <Banner />

        <section id="how_much">
          <div>
            <h2 className="section_title uppercase">Barra de proteína</h2>
            <p>
              A barrinha pra você levar pro treino ou como aquele lanche da
              tarde!
            </p>
          </div>
          <div>
            <p className="section_title">Tá, mas quanto custa?</p>
            <p>
              Cada barrinha custa 7 (sete) reais. <br />
              <br />
              A cada 11 você ganha + 1, ou seja: <br />
              R$77,00 - 12 unidades
            </p>
          </div>
        </section>
        <section id="orders">
          <div className="order_image">
            <img src="./img/bars.png" />
          </div>
          <div className="orders_content">
            <div>
              <p className="section_title uppercase">Encomendas</p>
              <p>
                Você também pode encomendar as suas barrinhas através do nosso
                Instagram <strong>@pura.bar</strong>
              </p>
            </div>
          </div>
        </section>
        <section id="selling_point" className="bg_image">
          <div className="layer">
            <div className="selling_content">
              <h3 className="section_title">Locais de Venda!</h3>
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
              <a
                href="https://goo.gl/maps/Hh5FpzZSEMYJ5Z6s5"
                target="_blank"
                className="cta_button selling_btn"
              >
                Ver lista completa
              </a>
            </div>
          </div>
        </section>
        <section id="proposal" className="bg_image">
          <div>
            <div className="brown_box">
              <p className="section_title uppercase">Nossa Proposta</p>
              <p className="uppercase">
                Ingredientes naturais <br />
                Coposição clean <br />
                Qualidade <br />
                Sabor <br />
                Saúde <br />
              </p>
            </div>
          </div>
        </section>
        <section id="about_us">
          <div>
            <p className="section_title uppercase brown_highlight">
              Quem Somos
            </p>
            <p>
              Olá! Nós somos o Kaio e o Léo. <br />
              Os criadores da PURA.BAR. O Kaio é Nutricionista e o Léo é
              estudante de engenharia, e juntos decidimos investir em levar
              saúde para as pessoas. <br />
              Somos antes de tudo, consumidores do fitness e da vida saudável
              que não encontravam lanches que pudessem fornecer de forma
              equilibrada todos os nutrientes. <br />
              Então a solução disso foi a PURA.BAR, uma barra feita de
              ingredientes naturais. <br />
              Nossa missão é ajudar a todos que buscam melhorar sua saúde sem
              abrir mão de se alimentar com prazer.
            </p>
          </div>
          <img className="quem_somos_img" src="/img/quem_somos.png" />
        </section>
        <section id="contact" className="bg_image">
          <div className="form_container">
            <div className="contact_card">
              <p>Encomende suas barrinhas pelo nosso Insta ou WhatsApp!</p>
              <div className="social_button">
                <a
                  href="https://api.whatsapp.com/send?phone=555181297577&text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20algumas%20barrinhas%20da%20PURA!"
                  target="_blank"
                  className="submit_button"
                >
                  <img src="./img/whatsapp.png" /> Enviar mensagem pelo Whats
                </a>
              </div>
              <div className="social_button">
                <a
                  href="https://www.instagram.com/pura.bar"
                  target="_blank"
                  className="submit_button"
                >
                  <img src="./img/instagram.png" /> Acessar a página do
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>
            Copyright @ 2020. Developed by{' '}
            <a href="http://www.giselamirandadifini.com/" target="_blank">
              Gisela Miranda Difini
            </a>
          </p>
        </footer>
        {/*  <script>
       (function() {
         var link = document.querySelector(".mobile_link");

         link.onclick = function() {
           document.getElementById("overlay-input").checked = false;
         };
       })();
     </script> */}
      </body>
    </div>
  );
};
export default HomePage;
