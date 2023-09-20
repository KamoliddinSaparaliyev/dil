import succes from "../../assets/icons/Outline Success.svg";
import useAlertStore from "../../state/succesStore.ts";

//modal styles
import "./succes-alert.scss";
export const SuccecAlert = () => {
  const { isAlert } = useAlertStore();
  return (
    <div className={`modal__wrapperr ${isAlert ? "open" : ""}`}>
      <div className="modal">
        <div className="img__container">
          <img src={succes} alt="icon" />
        </div>
        <h1>Cпасибо за вашу заявку!</h1>
        <p>Наш менеджер свяжется с вами в течении 3-ех часов</p>
        <button className="succes_btn">Отправлено</button>
      </div>
    </div>
  );
};
