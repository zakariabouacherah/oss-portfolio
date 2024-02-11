import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Heading from "../components/Heading";
import toast from "react-hot-toast";

export const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!form.current.from_name.value.trim()) {
      errors.name = "Name is required";
    }
    if (!form.current.from_email.value.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.current.from_email.value.trim())) {
      errors.email = "Email is invalid";
    }
    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm("service_48z0ss3", "template_a9019b9", form.current, {
          publicKey: "Ka4TaM-KhvRYho5JA",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Message sent successfully");
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Failed to send message");
          }
        );
    }
  };

  const inputStyle =
    "border-[.6px] bg-transparent border-neutral-400 p-2 outline-none rounded-md shadow-sm focus:border-neutral-300 placeholder:text-sm placeholder:text-neutral-700";

  return (
    <section
      id="contact"
      style={{
        padding: "120px 8rem",
        backgroundImage: 'url("../public/3.png")',
      }}
      className="z-0 min-h-screen relative flex flex-col items-center justify-center gap-10 bg-top px-20 md:px-36 bg-[#292929] "
    >
      <div className="z-0 mb-10">
        <Heading title="CONTACT ME" background="CONTACT" />
      </div>
      <p className="text-white w-[70%] text-center ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos eaque
        soluta non illo voluptatum fuga nisi veniam est. At eos, nulla dicta
        asperiores dignissimos aut alias autem vero natus.
      </p>
      <div className="relative">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 backdrop-blur-lg bg-[#c3c3c330] text-[#EDEDDF] flex flex-col justify-center gap-6 rounded-md shadow-md p-4 md:p-8 max-w-full w-[750px] min-h-[460px]"
        >
          <div className="flex flex-col">
            <label>Name</label>
            <input
              className={inputStyle}
              type="text"
              name="from_name"
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-rose-600 text-sm mt-1">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className={inputStyle}
            />
            {errors.email && (
              <span className="text-rose-600 text-sm mt-1">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              className={inputStyle}
              style={{ resize: "none" }}
            />
            {errors.message && (
              <span className="text-rose-600 text-sm mt-1">
                {errors.message}
              </span>
            )}
          </div>
          <input
            type="submit"
            value="Send"
            className="bg-[#e9fc87] py-3 rounded-md w-[50%] self-center cursor-pointer text-[#141414] hover:bg-[#d3e675] "
          />
        </form>
        <div className="absolute h-full w-full rounded-[50%] z-0 top-0 left-0 p-12">
          <img
            src="../../public/message.png"
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
