import { SectionType } from "../../types";
export const Section = ({ children, id }: SectionType) => {
	return <section id={id} className={id}>{children}</section>;
};