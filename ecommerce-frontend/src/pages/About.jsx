import React from "react";
import WhatsappButton from "../components/whatsappButton";

function About() {
  return (
    <section className="py-16 bg-gray-50 mt-15">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
          Our Story at HeatWave Fashion
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <strong className="text-blue-600">HeatWave Fashion</strong>, we
            believe that fashion should be both inspiring and accessible.
            Founded in <strong className="text-blue-600">2025</strong>, our
            journey began with a simple vision: to create a destination where
            style meets comfort without compromising on quality or
            affordability.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We're passionate about carefully curating a collection of the latest
            trends and timeless essentials. Every piece, from our vibrant
            apparel to our unique accessories, is selected with you in mind,
            ensuring it adds value and flair to your wardrobe.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our dedicated team is committed to making your shopping experience
            seamless and enjoyable. We strive to provide exceptional customer
            service and a product range that empowers you to express your unique
            style with confidence. Thank you for being a part of the HeatWave
            Fashion community!
          </p>
        </div>
      </div>
      <WhatsappButton />
    </section>
  );
}

export default About;
