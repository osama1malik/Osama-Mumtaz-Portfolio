import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/+923185297392";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-12 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFloat;
