import style from "../Footer/footer.module.css";
import ImgF from "../../assets/img/Logo.svg";
import Linkedin from "../../assets/img/linkedin.svg";
import Youtube from "../../assets/img/youtube.svg";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Twitter from "../../assets/img/twitter.svg";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.footerWrapper}>
        <div className={style.avo}>
          <div className={style.footerText}>
            <div className={style.footerImg}>
              <img src={ImgF} />
            </div>
            <h2>
              © 2023 Nu Pagamentos S.A - Instituição de Pagamento.
              18.236.120/0001-58 Rua Capote Valente, 39 - São Paulo, SP -
              05409-000
            </h2>
          </div>
          <div className={style.footerContent}>
            <div className={style.footerLinksNubank}>
              <ul>
                <li className={style.footerTextLinks}>Nubank</li>
                <li>
                  <a href="#">Sobre nós</a>
                </li>
                <li>
                  <a href="#">Carreiras</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">ESG</a>
                </li>
                <li>
                  <a href="#">Imprensa</a>
                </li>
                <li>
                  <a href="#">Investidores</a>
                </li>
              </ul>
            </div>
            <div className={style.footerLinksNubank}>
              <ul>
                <li className={style.footerTextLinks}>Produtos</li>
                <li>
                  <a href="#">Conta digital</a>
                </li>
                <li>
                  <a href="#">Cartão de crédito</a>
                </li>
                <li>
                  <a href="#">Empréstimo</a>
                </li>
                <li>
                  <a href="#">Conta PJ</a>
                </li>
                <li>
                  <a href="#">Nubank Vida</a>
                </li>
                <li>
                  <a href="#">Investimentos</a>
                </li>
              </ul>
            </div>
            <div className={style.footerLinksNubank}>
              <ul>
                <li className={style.footerTextLinks}>Transparência</li>
                <li>
                  <a href="#">Política de privacidade</a>
                </li>
                <li>
                  <a href="#">Política de segurança</a>
                </li>
                <li>
                  <a href="#">Contratos</a>
                </li>
                <li>
                  <a href="#">Relatórios financeiros</a>
                </li>
                <li>
                  <a href="#">PLD/CFTP</a>
                </li>
                <li>
                  <a href="#">Convenção de boletos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footerContato}>
          <div className={style.containerContato}>
            <div className={style.textcontato}>
              <h2>Contatos</h2>
            </div>
            <div className={style.redesFooter}>
              <img width={30} src={Linkedin} />
              <img width={30} src={Youtube} />
              <img width={30} src={Facebook} />
              <img width={30} src={Instagram} />
              <img width={30} src={Twitter} />
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
