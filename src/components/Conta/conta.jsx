import style from "../Conta/conta.module.css";
import Img from "../../assets/img/conta.jpg";

const Conta = () => {
  return (
    <div className={style.Conta}>
      <div className={style.contaWrapper}>
        <div className={style.contaImg}>
          <img src={Img} />
        </div>
        <div className={style.contaText}>
          <h2>Conta</h2>
          <p>
            A conta do Nubank não tem tarifas de manutenção. Nela, você não paga
            nenhuma tarifa e seu dinheiro rende a uma taxa maior do que a
            poupança. Além disso, tem transferências gratuitas e ilimitadas para
            qualquer outra conta, em qualquer outro banco.
          </p>
					<div className={style.contaBotao}>
						<button className={style.botaoconta}>Crie sua Conta</button>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Conta;
