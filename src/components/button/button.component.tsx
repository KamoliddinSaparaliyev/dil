import useModalStore from "../../state/modalStore.ts";
import { ButtonType } from "../../types/index.ts";

//button styles
import "./button.scss";

export const Button = ({ text }: ButtonType) => {
  const { openModal } = useModalStore();
  return (
    <button onClick={openModal} className="main__button">
      {text}
    </button>
  );
};
