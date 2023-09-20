import { SectionType } from "../../types/index.ts";

export const Section = ({ children, id }: SectionType) => {
  return (
    <section id={id} className={id}>
      {children}
    </section>
  );
};
