import style from "../Hero/hero.module.css";
import Banner from "../../assets/img/part2Banner.png";

const Hero = () => {
  return (
    <div className={style.Hero}>
      <div className={style.heroWrapper}>
        <div className={style.heroBanner}>
          <img src={Banner}></img>
        </div>
        <div className={style.heroContent}>
          <h2>100 milhões de clientes. Você no centro de tudo.</h2>
          <p>
            Em cada produto ou solução que lançamos, tudo é pensado para abrir N
            possibilidades na sua vida.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
