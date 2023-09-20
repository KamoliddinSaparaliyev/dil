import { MenuType } from "../../types";
import close from "../../assets/icons/close.svg";
import phone from "../../assets/icons/phone-outgoing.svg";

//menu styles
import "./menu.scss";
import { useTranslation } from "react-i18next";
export const Menu = ({ visible, hideMenu }: MenuType) => {
  const { t } = useTranslation();
  return (
    <div className={`menu ${visible ? " open" : "close"}`}>
      <button onClick={hideMenu} className="close__btn">
        <img src={close} alt="close" />
      </button>
      <ul className="menu__list">
        <li>
          <a onClick={hideMenu} href="#service">
            {t("xizmatlar")}
          </a>
        </li>
        <li>
          <a onClick={hideMenu} href="#work">
            {t("biz_haqimizda")}
          </a>
        </li>
        <li>
          <a onClick={hideMenu} href="#contact">
            {t("aloqa")}
          </a>
        </li>
      </ul>
      <div className="menu__contact">
        <button>
          <img src={phone} alt="call" />
        </button>
        <span>Позвонить</span>
      </div>
    </div>
  );
};
