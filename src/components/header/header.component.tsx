import { useState, useEffect } from "react";
import { ContactModal } from "../contact-modal/contact-modal.component.js";
import { Menu } from "../menu/nav-menu.component.js";

//images
import logo from "../../assets/icons/logo.png";
import menu from "../../assets/icons/menu.svg";

//header styles
import "./header.scss";
import { SuccecAlert } from "../succes-alert/succes.component.js";
import { Switch } from "../switch/switch.component.js";
import { useTranslation } from "react-i18next";
import { Container } from "../../layouts/container/container.component.tsx";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();

  const showMenu = () => {
    setIsModalVisible(true);
  };
  const hideMenu = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? "header scrolled" : "header";

  return (
    <header className={headerClass}>
      <Container>
        <nav className="header__nav">
          <a href="#">
            <img className="logo" width={100} src={logo} alt="logo" />
          </a>

          <div className="header__nav--box">
            <ul className="header__nav--list">
              <li>
                <a href="#service">{t("xizmatlar")}</a>
              </li>
              <li>
                <a href="#work">{t("biz_haqimizda")}</a>
              </li>
              <li>
                <a href="#contact">{t("aloqa")}</a>
              </li>
            </ul>
            <Switch />
          </div>

          <button onClick={showMenu} className="menu_btn">
            <img src={menu} alt="menu-icon" />
          </button>
        </nav>
      </Container>
      <Menu visible={isModalVisible} hideMenu={hideMenu} />
      <ContactModal />
      <SuccecAlert />
    </header>
  );
};
