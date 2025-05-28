import React from "react";
import WhatsappButton from "../components/whatsappButton";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="6"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
      <WhatsappButton />
    </div>
  );
}

export default Contact;
