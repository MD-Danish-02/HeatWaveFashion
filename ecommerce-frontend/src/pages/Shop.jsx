import React from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ALL_PRODUCTS from "../data/products";
import WhatsappButton from "../components/whatsappButton";

function Shop() {
 useEffect(() => {
 window.scrollTo(0, 0); 
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gray-50 mt-10"> 
      <div className="container mx-auto px-4 md:px-8 lg:px-12"> 
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">
          Explore Our Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8"> 
          {ALL_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <WhatsappButton/>
    </section>
  );
}

export default Shop;