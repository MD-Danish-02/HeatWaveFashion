import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ALL_PRODUCTS from "../data/products";
import WhatsappButton from "../components/whatsappButton";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null); // New state for selected size

  useEffect(() => {
    const found = ALL_PRODUCTS.find((p) => p.id === parseInt(id));
    setProduct(found);
    if (found && found.images && found.images.length > 0) {
      setMainImage(found.images?.[0]);
    }
    setSelectedSize(null);
    window.scrollTo(0, 0);

    const filteredRelated = ALL_PRODUCTS.filter(
      (p) => p.id !== parseInt(id)
    ).slice(0, 4);
    setRelatedProducts(filteredRelated);
  }, [id]);

  if (!product) return <p className="p-8 text-gray-600">Loading...</p>;

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast.error("Please select a size!", {
        position: "top-right",
        autoClose: 1500,
      });
      return;
    }

    dispatch(addToCart({ ...product, quantity, selectedSize })); // Pass selectedSize
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const changeMainImage = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="p-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={mainImage}
            alt={product.name}
            className="rounded-xl shadow-md w-full object-contain"
            style={{ maxHeight: "450px", width: "auto", margin: "0 auto" }}
          />
          {product.images && product.images.length > 1 && (
            <div className="flex mt-4 gap-2 overflow-x-auto justify-center">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} - ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 border-2"
                  style={{
                    borderColor: mainImage === img ? "#3B82F6" : "transparent",
                  }} // Highlight selected thumbnail
                  onClick={() => changeMainImage(img)}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Sizes:</h4>
              <div className="flex flex-wrap items-center gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      inline-block border rounded-md px-4 py-2 text-base cursor-pointer
                      transition-colors duration-200
                      ${
                        selectedSize === size
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "border-gray-400 hover:bg-gray-200 text-gray-700"
                      }
                    `}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={decreaseQuantity}
              className="bg-gray-300 px-3 py-1 rounded text-lg"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-300 px-3 py-1 rounded text-lg"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <hr className="my-10 border-gray-300" />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-lg text-gray-800">
                    {review.user}
                  </p>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-700 font-medium">
                    {review.rating} out of 5 stars
                  </span>
                </div>
                <p className="text-gray-700 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No reviews yet. Be the first to review this product!
          </p>
        )}
      </div>

      <hr className="my-10 border-gray-300" />
      <h2 className="text-2xl font-bold mb-6 text-center">
        Other Products You Might Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((p) => (
          <Link
            to={`/product/${p.id}`}
            key={p.id}
            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-xl transition-shadow duration-300" // Added block and hover effect
          >
            <img
              src={p.images?.[0]}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-700">₹{p.price}</p>
              <span className="mt-3 inline-block bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-700 transition text-sm">
                See Details
              </span>
            </div>
          </Link>
        ))}
      </div>
      <ToastContainer />
      <WhatsappButton />
    </div>
  );
}

export default ProductDetails;
