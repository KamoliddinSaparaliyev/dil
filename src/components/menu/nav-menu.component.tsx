import { MenuType } from "../../types";

import close from "../../assets/icons/close.svg";
import phone from "../../assets/icons/phone-outgoing.svg";
// import phone2 from "../../assets/images/logo2.jpg";

//menu styles
import "./menu.scss";
export const Menu = ({ visible, hideMenu }: MenuType) => {
  return (
    <div className={`menu ${visible ? " open" : "close"}`}>
      <button onClick={hideMenu} className="close__btn">
        <img src={close} alt="close" />
      </button>
      <ul className="menu__list">
        <li>
          <a onClick={hideMenu} href="#service">
            Услуги
          </a>
        </li>
        <li>
          <a onClick={hideMenu} href="#work">
            Как мы работаем
          </a>
        </li>
        <li>
          <a onClick={hideMenu} href="#digital">
            Результат
          </a>
        </li>
        <li>
          <a onClick={hideMenu} href="#contact">
            Заказать
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
