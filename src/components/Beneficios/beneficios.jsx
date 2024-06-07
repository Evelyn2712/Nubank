import style from "../Beneficios/beneficios.module.css";
import Icon4 from "../../assets/img/icon4.svg";
import Icon5 from "../../assets/img/icon5.svg";
import Icon6 from "../../assets/img/icon6.svg";

const Beneficios = () => {
  return (
    <div className={style.Beneficios}>
      <div className={style.beneficiosWrapper}>
        <div className={style.title}>
          <h2>Faça mais com seu cartão de crédito</h2>
        </div>
        <div className={style.beneficiosConteiners}>
          <div className={style.beneficiosRow1}>
            <div className={style.icon4}>
              <img src={Icon4} width={40} />
            </div>
            <div className={style.text1}>
              <h2>Pix no crédito</h2>
              <p>
                Faça pagamentos PIX utilizando seu cartão de crédito. Parcele e
                aproveite essa vantagem.
              </p>
            </div>
          </div>
          <div className={style.beneficiosRow2}>
            <div className={style.icon5}>
              <img src={Icon5} width={40} />
            </div>
            <div className={style.text1}>
              <h2>Pagamento de Boleto com cartão de crédito</h2>
              <p>Pague seus boletos no crédito e parcele em até 12 vezes.</p>
            </div>
          </div>
          <div className={style.beneficiosRow3}>
            <div className={style.icon4}>
              <img src={Icon6} width={40} />
            </div>
            <div className={style.text1}>
              <h2>Pagamento de Boleto com cartão de crédito</h2>
              <p>Pague seus boletos no crédito e parcele em até 12 vezes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
