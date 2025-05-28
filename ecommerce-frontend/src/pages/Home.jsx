import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import ProductCard from "../components/ProductCard";
import WhatsappButton from "../components/whatsappButton";
import bg from "./../assets/bg.jpg";
import women from "./../assets/women.jpeg";
import men from "./../assets/men.jpeg";
import accessories from "./../assets/accessories.jpeg";

import ALL_PRODUCTS from "../data/products";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const welcomeText = "Welcome to HeatWave Fashion";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < welcomeText.length) {
        setTypedText(welcomeText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const newArrivalsDisplay = ALL_PRODUCTS.slice(0, 5);
  const topProductsDisplay = ALL_PRODUCTS.slice(5, 10);

  const categories = [
    {
      id: 1,
      name: "Women's Collection",
      image: women,
      link: "/shop?category=women",
    },
    { id: 2, name: "Men's Apparel", image: men, link: "/shop?category=men" },
    {
      id: 3,
      name: "Stylish Accessories",
      image: accessories,
      link: "/shop?category=accessories",
    },
  ];

  const yourPhoneNumber = `${import.meta.env.VITE_WHATSAPP_NUMBER}`; // Replace with your WhatsApp number (include country code without + or spaces)
  const whatsappMessage = "Hello! I need support regarding HeatWave Fashion."; // Optional pre-filled message
  const whatsappLink = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-64px)] flex items-center justify-center text-white bg-cover bg-center mt-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">
            {typedText}
            {!typingDone && (
              <span className="animate-blink inline-block w-2 bg-white ml-1">
                |
              </span>
            )}{" "}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeInUp">
            Discover the latest trends and timeless classics at unbeatable
            prices.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-gray-900 py-3 px-10 rounded-full font-semibold text-lg
                       hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounceIn"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Fresh Finds: New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {newArrivalsDisplay.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full font-medium
                         hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Our Bestsellers: Top Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {topProductsDisplay.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full font-medium
                         hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                to={cat.link}
                key={cat.id}
                className="relative group block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-80 object-cover object-center transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white bg font-extrabold text-3xl text-center p-4">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Stay Ahead of the Curve!
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our newsletter for exclusive offers, styling tips, and early
          access to new collections.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 px-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg
                       hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </section>
      <WhatsappButton />
    </div>
  );
}

export default Home;
