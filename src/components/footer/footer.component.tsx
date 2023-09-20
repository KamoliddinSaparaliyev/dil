import { Container } from "../../layouts/container/container.component.tsx";

import footer_bg from "../../assets/icons/footer-bg.png";
import footer_bg_left from "../../assets/icons/footer-left.png";

//footer styles
import "./footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <ul className="footer__list">
          <li>
            <a href="#service">Услуги</a>
          </li>
          <li>
            <a href="#work">Как мы работаем</a>
          </li>
          <li>
            <a href="#digital">Результат</a>
          </li>
          <li>
            <a href="#contact">Заказать</a>
          </li>
        </ul>
      </Container>
      <img className="bg_right" src={footer_bg} alt="footer background" />
      <img className="bg_left" src={footer_bg_left} alt="footer background" />
    </footer>
  );
};
