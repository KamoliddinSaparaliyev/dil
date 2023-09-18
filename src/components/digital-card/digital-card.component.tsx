import { DigitalCardType } from '../../types';

import tick from '../../assets/icons/tick.svg';

//digital card styles
import './digital-card.scss';
export const DigitalCard = ({text}: DigitalCardType) => {
  return (
    <div className="digital_card" data-aos="zoom-out">
        <h3 className='digital_card_title'>{text}</h3>
        <img className='tick' src={tick} alt="tick icon" />
    </div>
  )
}
