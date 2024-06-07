import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../Swiper/swipercarrossel.module.css";
import Icon1 from "../../assets/img/icon1.svg";
import Icon2 from "../../assets/img/icon2.svg";
import Icon3 from "../../assets/img/icon3.svg";

const Swipper = () => {
  return (
    <section className={style.swipper} id="carrosell-home">
      <div className={style.swipperWrapper}>
        <Swiper
          spaceBetween={20}
          effect={"fade"}
          autoplay={{
            delay: 5500,
            disableOnInteraction: true,
          }}
          slidesPerView={3}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            600: {
              width: 600,
              slidesPerView: 1,
            }
          }}
          navigation
          modules={[Autoplay, Pagination, Navigation, A11y]}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={style.bloco1}>
              <div className={style.icon1}>
                <img src={Icon1}></img>
              </div>
              <div className={style.text}>
                <h2>Empréstimo</h2>
                <p>
                  Transparentes, seguros e do seu jeito. Opções de empréstimos
                  que deixam você no controle do início ao fim.
                </p>
              </div>
              <div className={style.buttonSaibaMais}>
                <a href="#">Saiba Mais</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.bloco1}>
              <div className={style.icon1}>
                <img src={Icon1}></img>
              </div>
              <div className={style.text}>
                <h2>NuConsignado</h2>
                <p>
                  O empréstimo consignado para servidores públicos federais e,
                  em breve, para aposentados e pensionistas do INSS.
                </p>
              </div>
              <div className={style.buttonSaibaMais}>
                <a href="#">Saiba Mais</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.bloco1}>
              <div className={style.icon1}>
                <img src={Icon2}></img>
              </div>
              <div className={style.text}>
                <h2>Investimentos</h2>
                <p>
                  Investimentos a partir de R$ 1 e opções para todos os perfis.
                  Uma experiência fácil, segura e transparente
                </p>
              </div>
              <div className={style.buttonSaibaMais}>
                <a href="#">Saiba Mais</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.bloco1}>
              <div className={style.icon1}>
                <img src={Icon2}></img>
              </div>
              <div className={style.text}>
                <h2>Caixinhas</h2>
                <p>
                  Organize e guarde dinheiro para seus planos. Crie Caixinhas
                  personalizadas para cada um de seus objetivos
                </p>
              </div>
              <div className={style.buttonSaibaMais}>
                <a href="#">Saiba Mais</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.bloco1}>
              <div className={style.icon1}>
                <img src={Icon3}></img>
              </div>
              <div className={style.text}>
                <h2>Cartão de crédito</h2>
                <p>
                  Um cartão completo, moderno e gratuito pra você. E com
                  anuidade zero. Fique no controle da sua vida financeira
                </p>
              </div>
              <div className={style.buttonSaibaMais}>
                <a href="#">Saiba Mais</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.bloco1}>
              <div className={style.icon1}>
                <img src={Icon3}></img>
              </div>
              <div className={style.text}>
                <h2>Pix no crédito</h2>
                <p>
                  Faça um Pix e pague com o cartão de crédito: não use o saldo
                  da sua conta e concentre os gastos no cartão.
                </p>
              </div>
              <div className={style.buttonSaibaMais}>
                <a href="#">Saiba Mais</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Swipper;
