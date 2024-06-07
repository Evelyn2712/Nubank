import style from "../Conteudo2/conteudo2.module.css";
import Icon1 from "../../assets/img/icon1.svg";
// import Icon2 from "../../assets/img/icon2.svg";

const Conteudo2 = () => {
  return (
    <div className={style.Conteudo2}>
      <div className={style.conteudo2Wrapper}>
        <div className={style.bloco1}>
          <div className={style.icon1}>
            <img src={Icon1}></img>
          </div>
          <div className={style.text}>
            <h2>Empréstimo</h2>
            <p>
              Transparentes, seguros e do seu jeito. Opções de empréstimos que
              deixam você no controle do início ao fim.
            </p>
          </div>
          <div className={style.buttonSaibaMais}>
            <a href="#">Saiba Mais</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conteudo2;
