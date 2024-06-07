import style from "../Header/header.module.css";
import Logo from "../../assets/img/Logo.svg";
import { useState } from "react";
import MenuCloser from "../../assets/img/menu-closer.svg";
import MenuTogle from "../../assets/img/menu-togle.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const links = [
    { name: "Inicio", link: "/" },
    { name: "Para você", link: "/" },
    { name: "Para seu negócio", link: "/" },
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}>
          <img src={Logo} alt="Logo"></img>
        </div>
        <button id={style.buttonMobile} onClick={toggleMenu}>
          <img
            src={menuActive ? MenuCloser : MenuTogle}
            id={style.menuIcons}
            alt="Icon menu mobile"
          />
        </button>
        <nav className={style.headerNav}>
          <ul className={style.ulNav} id={style.Menu}>
            <div className={style.navLiDiv}>
              {links.map((link, index) => (
                <li className={style.navLi} key={index}>
                  <a href={link.link} className={style.linksMenuLi}>
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
            <div className={style.navLiDiv2}> 
              <li>
                <a className={style.botao} href="#">Quero ser Nubank</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
