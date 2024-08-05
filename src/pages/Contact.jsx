import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Heading from "../components/Heading";
import toast from "react-hot-toast";

export const Contact = () => {
  // const form = useRef();
  // const [errors, setErrors] = useState({});

  // const validateForm = () => {
  //   const errors = {};
  //   if (!form.current.from_name.value.trim()) {
  //     errors.name = "Name is required";
  //   }
  //   if (!form.current.from_email.value.trim()) {
  //     errors.email = "Email is required";
  //   } else if (!/^\S+@\S+\.\S+$/.test(form.current.from_email.value.trim())) {
  //     errors.email = "Email is invalid";
  //   }
  //   if (!form.current.message.value.trim()) {
  //     errors.message = "Message is required";
  //   }
  //   setErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     emailjs
  //       .sendForm("service_48z0ss3", "template_a9019b9", form.current, {
  //         publicKey: "Ka4TaM-KhvRYho5JA",
  //       })
  //       .then(
  //         () => {
  //           console.log("SUCCESS!");
  //           toast.success("Message sent successfully");
  //           form.current.reset();
  //         },
  //         (error) => {
  //           console.log("FAILED...", error.text);
  //           toast.error("Failed to send message");
  //         }
  //       );
  //   }
  // };

  return (
    <section
      id="contact"
      className="z-0 relative flex flex-col items-center lg:justify-center gap-10  pt-10 pb-16 px-12 md:px-24 lg:px-32 bg-[#030303] "
    >
      <div className="z-0 mb-10">
        <Heading title="CONTACT" background="CONTACT" />
      </div>
      <div className="relative z-10  bg-[#c3c3c330] text-[#f4f4f4] flex flex-col lg:flex-row justify-between items-center gap-8 rounded-md shadow-md p-4 md:p-8 max-w-full lg:w-[1050px] ">
        <div className="font-bold lg:text-5xl text-4xl lg:w-[50%] text-center lg:text-start ">
          Let's work together on your next project
        </div>
        <div className="lg:w-[50%] flex justify-end">
          <a
            href="https://wa.me/qr/MABUWITEPHCCB1"
            className="bg-[#ff9a00] py-2 px-4 rounded-full text-xl font-semibold uppercase "
            target="_blank"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};
