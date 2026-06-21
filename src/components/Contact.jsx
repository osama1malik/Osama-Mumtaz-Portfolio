import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const SuccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="relative bg-black-200 rounded-3xl p-8 sm:p-10 max-w-md w-full border border-white/10 shadow-2xl text-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white text-xl leading-none hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#915eff]/20 flex items-center justify-center text-[#915eff] text-2xl">
          ✓
        </div>

        <h3
          id="contact-success-title"
          className="text-white font-bold text-[24px] sm:text-[28px]"
        >
          Message Sent
        </h3>

        <p className="mt-4 text-secondary text-[16px] leading-relaxed">
          Thank you. I will get back to you as soon as possible.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary hover:opacity-90 transition-opacity"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const emailjsServiceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const isEmailJsConfigured = Boolean(
    emailjsServiceId && emailjsTemplateId && emailjsPublicKey
  );

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailJsConfigured) {
      console.error(
        "EmailJS is not configured. Add VITE_APP_EMAILJS_SERVICE_ID, VITE_APP_EMAILJS_TEMPLATE_ID, and VITE_APP_EMAILJS_PUBLIC_KEY to a .env file."
      );
      alert(
        "The contact form is not configured yet. Please add your EmailJS credentials to a .env file and restart the dev server."
      );
      return;
    }

    setLoading(true);

    emailjs
      .send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: form.name,
          to_name: "Osama Mumtaz",
          from_email: form.email,
          to_email: "osamamumtaz96@gmail.com",
          message: form.message,
        },
        emailjsPublicKey
      )
      .then(
        () => {
          setLoading(false);
          setShowSuccessModal(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
