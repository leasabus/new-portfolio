import { ContactForm } from "./ContactForm";
import { ContactDescription } from "./ContactDescription";

export const Contact = () => {
  return (
    <section id="contact">
      <div className=" h-[500px] mt-20 md:mt-0 flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start ">
        <ContactForm />
        <ContactDescription />
      </div>
    </section>
  );
};
