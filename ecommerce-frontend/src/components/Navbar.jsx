import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../redux/slices/userSlice";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Sun } from "lucide-react";
import logo from "./../assets/logo.jpg";

function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [locationLabel, setLocationLabel] = useState("Your Area"); // Corrected typo in variable name

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const getWeatherUrl = (lat, lon) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  useEffect(() => {
    const fetchWeather = (lat, lon) => {
      fetch(getWeatherUrl(lat, lon))
        .then((res) => res.json())
        .then((data) => {
          if (data?.current_weather?.temperature) {
            setTemperature(data.current_weather.temperature);
          }
        })
        .catch((err) => console.error("Failed to fetch weather:", err));
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.warn("Geolocation not allowed or failed", error);
        }
      );
    }
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg fixed top-0 left-0 w-full z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl md:text-3xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform duration-300 ease-out"
          >
            <img
              src={logo}
              alt="HeatWave Fashion Logo"
              className="h-8 md:h-10 w-auto"
            />
            <span>HeatWave</span>
          </Link>

          {temperature !== null && (
            <div className="hidden md:flex items-center text-white space-x-1 bg-blue-600 px-3 py-1 rounded-full shadow">
              <Sun size={18} className="text-yellow-300" />
              <span>
                {locationLabel}: {Math.round(temperature)}°C
              </span>
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-base text-white hover:text-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {name}
            </Link>
          ))}

          <Link
            to="/cart"
            className="text-white hover:text-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105 relative"
          >
            <ShoppingCart size={20} strokeWidth={2} />
          </Link>

          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium border border-blue-500">
                <User size={16} />
                <span>
                  Hi, {user?.name || user?.email?.split("@")[0] || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-blue-800 absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-base">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="block text-white hover:text-blue-200 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          <Link
            to="/cart"
            className="text-white hover:text-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105 relative"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center space-x-2">
              <ShoppingCart size={22} strokeWidth={2} />
              <span>Cart</span>
            </div>
          </Link>

          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-2 text-white text-sm font-medium">
                <User size={18} />
                <span>
                  Hi, {user?.name || user?.email?.split("@")[0] || "User"}
                </span>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-red-300 hover:text-red-100 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
