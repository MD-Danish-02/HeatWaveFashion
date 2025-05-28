import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function whatsappButton() {
  const yourPhoneNumber = `${import.meta.env.VITE_WHATSAPP_NUMBER}`;
  const whatsappMessage = "Hello! I need support regarding HeatWave Fashion.";
  const whatsappLink = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-xl z-[1000] transition-all duration-300 transform hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default whatsappButton;
