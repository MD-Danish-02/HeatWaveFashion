import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
