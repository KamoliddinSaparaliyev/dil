import { ButtonType } from "../../types"
import useModalStore from "../../state/modalStore";

//button styles
import './button.scss';
export const Button = ({text}: ButtonType) => {
  const {openModal} = useModalStore()
  return (
    <button onClick={openModal} className="main__button">{text}</button>
  )
}


