import { useState } from "react";
import "./switch.scss";
import { useTranslation } from "react-i18next";

export const Switch = () => {
  const [translate, setTranslate] = useState(false);

  const { i18n } = useTranslation();
  const lang = localStorage.getItem("lang");
  const toggle = () => {
    setTranslate(!translate);
    i18n.changeLanguage(translate ? "uz" : "ru");
    localStorage.setItem("lang", translate ? "uz" : "ru");
  };
  return (
    <div className="switch">
      <label className="switch__wrapper">
        <input
          onClick={toggle}
          type="checkbox"
          value={lang === "uz" ? "uz" : ""}
        />
        <span className="switch__slider"></span>
        <div></div>
      </label>
    </div>
  );
};
