import React from "react";
import { FaFacebook, FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/osama.1.malik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://www.facebook.com/osama.1.malik/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/osama1malik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;