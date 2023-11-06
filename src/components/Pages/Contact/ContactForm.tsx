import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

interface InitialState {
  name: string;
  email: string;
  message: string;
}

const initialState: InitialState = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [state, submitMail] = useForm("xbjvwvwg");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center md:items-start text-terciary">
        <span className="text-terciary font-bold text-3xl">Thank you!</span>
        <span className="text-xl text-text mt-4">
          I will get in touch with you.
        </span>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="flex flex-col items-center md:items-start  mt-20 md:mt-0 ">
      <h1 className="md:hidden text-5xl font-bold text-secondary">
        Contact Me
      </h1>
      <h3 className="md:hidden text-2xl  text-terciary mt-4">
        Let's work together!
      </h3>

      <form
        action="https://formspree.io/f/xbjvwvwg"
        method="POST"
        className="mt-12 md:mt-0 flex flex-col gap-8 w-full text-xl p-4"
        onSubmit={submitMail}
      >
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          color="primary"
          className=" rounded p-2  bg-terciary text-primary w-[300px] md:w-[350px] "
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email"
          className=" rounded p-2 bg-terciary text-primary w-[300px] md:w-[350px]"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          onChange={handleChange}
          id="message"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          cols={30}
          rows={5}
          className=" bg-terciary rounded text-primary w-[300px] md:w-[350px]"
        ></textarea>

        {formData.message.length > 300 ? (
          <small>Alcanzaste el limite de caracteres</small>
        ) : (
          ""
        )}

        <button
          disabled={state.submitting}
          type="submit"
          className=" bg-transparent text-terciary  font-semibold  py-2 px-4 border border-secondary hover:bg-secondary rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
};
