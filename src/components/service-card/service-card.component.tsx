import { ServiceCardType } from "../../types/index.ts";
import { Button } from "../button/button.component.tsx";

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
