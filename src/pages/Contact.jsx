import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Heading from "../components/Heading";
import toast from "react-hot-toast";
import bg from "../assets/3.png";

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
    "border-b-[2px] bg-transparent border-neutral-500 p-2 outline-none rounded-md shadow-sm focus:border-neutral-200 placeholder:text-sm placeholder:text-neutral-700";

  return (
    <section
      id="contact"
      style={{
        // padding: "120px 8rem",
        backgroundImage: `url(${bg})`,
      }}
      className="z-0 min-h-screen relative flex flex-col items-center lg:justify-center gap-12 bg-top bg-cover lg:bg-auto px-20 pb-16 md:px-36 bg-[#292929] "
    >
      <div className="z-0 my-10">
        <Heading title="CONTACT" background="CONTACT" />
      </div>
      <p className="text-white lg:w-[70%] text-center text-xl ">
        Let's talk about your next project
      </p>
      <div className="relative">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 bg-[#c3c3c330] text-[#EDEDDF] flex flex-col justify-center gap-8 rounded-md shadow-md p-4 md:p-8 max-w-full lg:w-[750px] lg:min-h-[460px]"
        >
          <div className="flex flex-col relative">
            <label>Name</label>
            <input
              className={inputStyle}
              type="text"
              name="from_name"
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-rose-600 text-sm mt-1 absolute bottom-[-20px] left-0">
                {errors.name}
              </span>
            )}
          </div>
          <div className="flex flex-col relative">
            <label>Email</label>
            <input
              type="text"
              name="from_email"
              placeholder="Your Email"
              className={inputStyle}
            />
            {errors.email && (
              <span className="text-rose-600 text-sm mt-1 absolute bottom-[-20px] left-0">
                {errors.email}
              </span>
            )}
          </div>
          <div className="flex flex-col relative">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              className={inputStyle}
              style={{ resize: "none" }}
            />
            {errors.message && (
              <span className="text-rose-600 text-sm mt-1 absolute bottom-[-20px] left-0">
                {errors.message}
              </span>
            )}
          </div>
          <input
            type="submit"
            value="Send"
            className="bg-[#b9090b] py-3 rounded-md w-[50%] self-center cursor-pointer text-[#fff] hover:bg-[#b9090ce0] "
          />
        </form>
      </div>
    </section>
  );
};
