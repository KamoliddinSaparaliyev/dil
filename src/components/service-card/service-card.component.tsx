import { ServiceCardType } from "../../types";
import { Button } from "../button";

//service card styles
import "./service-card.scss";
export const ServiceCard = ({ text }: ServiceCardType) => {
  return (
    <div className="service_card">
      <h2>{text}</h2>
      <Button text="Batafsil" />
    </div>
  );
};
