import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-700 text-xl font-bold mb-2">₹{product.price}</p>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-500 flex items-center text-sm">
            {"⭐".repeat(Math.floor(product.rating))} ({product.rating})
          </span>
          <Link
            to={`/product/${product.id}`}
            className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition-colors duration-300"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
