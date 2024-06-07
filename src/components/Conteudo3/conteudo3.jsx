import style from "./conteudo3.module.css";
import Banner2 from "../../assets/img/banner2.png";

const Conteudo3 = () => {
  return (
    <div className={style.Conteudo3}>
      <div className={style.conteudo3Wrapper}>
        <div className={style.text}>
          <h2>Conheça nosso Cartão de Crédito</h2>
          <p>
            Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno,
            gratuito e prático também.
          </p>
          <div className={style.buttonSaibaMais}>
            <a href="#">Saiba Mais</a>
          </div>
        </div>
        <div className={style.Banner2}>
          <img src={Banner2} />
        </div>
      </div>
    </div>
  );
};

export default Conteudo3;
