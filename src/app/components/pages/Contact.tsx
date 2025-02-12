"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactInfo from "../molecules/ContactInfo";
import FormField from "../atoms/FormField";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_USER_ID"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="w-full flex justify-center" id="contact">
      <div className="max-w-[1150px] py-10 flex flex-col items-center lg:flex-row ">
        <div className="flex flex-col w-full py-8 lg:py-0 text-gray-800">
          <ContactInfo />
        </div>
        <div className="w-full lg:w-[575px] px-4 lg:px-0">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col text-gray-800"
          >
            <FormField label="Naam" name="user_name" placeholder="Uw naam" />
            <FormField
              label="E-mail"
              name="user_email"
              type="email"
              placeholder="Uw e-mail"
            />
            <FormField label="Titel" name="title" placeholder="Uw titel" />
            <FormField
              label="Bericht"
              name="message"
              type="textarea"
              placeholder="Uw bericht"
            />
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 text-white w-full lg:w-1/2 bg-gray-800 border-2 border-gray-800 rounded font-bold transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-800 hover:transform hover:scale-105"
              >
                Verstuur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
