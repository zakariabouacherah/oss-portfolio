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
    "border-b-[2px] bg-transparent border-neutral-500 p-2 outline-none rounded-md shadow-sm focus:border-neutral-200 placeholder:text-sm placeholder:text-neutral-700";

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
      <p className="text-white w-[70%] text-center text-xl ">
        Let's talk about your next project
      </p>
      <div className="relative">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 backdrop-blur-lg bg-[#c3c3c330] text-[#EDEDDF] flex flex-col justify-center gap-8 rounded-md shadow-md p-4 md:p-8 max-w-full w-[750px] min-h-[460px]"
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
        <div className="absolute h-[30%] w-[30%] rounded-[50%] z-0 bottom-0 right-0 ">
          {/* <img
            src="../../public/message.png"
            className="w-full h-full object-contain"
            alt=""
          /> */}
          {/* <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain"
          >
            <path
              fill="#E9FC87"
              d="M50.4,-61.7C61.3,-51,63.1,-31.2,62.4,-14.2C61.6,2.9,58.3,17.3,51.2,29.6C44.1,41.8,33.3,51.8,18.8,61.2C4.3,70.6,-13.8,79.3,-25.2,73.4C-36.5,67.4,-41,46.9,-50.3,29.6C-59.5,12.4,-73.4,-1.5,-74.9,-16.7C-76.4,-31.9,-65.4,-48.4,-50.8,-58.4C-36.3,-68.4,-18.1,-71.9,0.8,-72.9C19.8,-73.9,39.6,-72.3,50.4,-61.7Z"
              transform="translate(100 100)"
            />
          </svg> */}
        </div>
      </div>
    </section>
  );
};
