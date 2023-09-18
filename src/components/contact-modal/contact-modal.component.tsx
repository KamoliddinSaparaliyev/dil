import { useState } from "react";
import { CHAT_ID, TOKEN, request } from "../../server";
import { FormData } from "../../types";
import useModalStore from "../../state/modalStore";
import close from "../../assets/icons/close.svg";

//modal styles
import "./contact-modal.scss";
import useAlertStore from "../../state/succesStore";
import { toast } from "react-toastify";

export const ContactModal = () => {
  const { isModalOpen, closeModal } = useModalStore();
  const {openAlert, closeAlert} = useAlertStore();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiToken = TOKEN;
    const chatId = CHAT_ID; 
    const message = `
      New message from user:
      👤 Name: ${formData.name}
      📪 Email: ${formData.email}
      ✉️ Message: ${formData.message}

      🧑🏻‍💻 Connect with developer: @jurayev_diyorbek
    `;
    try {
      await request.post(`bot${apiToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      
      setFormData({ name: "", email: "", message: "" });
      closeModal();
      openAlert()
      setTimeout(() => closeAlert(), 2000);
      toast.success("Message sent successfully")
    } catch (error) {
      toast.error("Error sending message to Telegram:");
    }
  };

  return (
    <div className={`modal__wrapper ${isModalOpen ? "open" : "close"}`}>
      <div className="modal">
        <button className="close_btn" onClick={closeModal}>
          <img src={close} alt="close icon" />
        </button>
        <h1>Получить бесплатную консультацию</h1>
        <p>
          В рамках консультации уточним необходимую информацию для анализа
          вашего проекта
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ваш электронная почта"
            />
            <input
              type="email"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="какая из услуг вас заинтересовала ?"
            />
          </div>
          <button type="submit" className="sent_btn">
            отправить
          </button>
        </form>
      </div>
    </div>
  );
};
