import React from "react";
import { useParams } from "react-router-dom";
import blog1 from "./../assets/blog1.jpeg";
import blog2 from "./../assets/blog2.jpeg";
import blog3 from "./../assets/blog3.jpeg";
import blog4 from "./../assets/blog4.jpeg";
import blog5 from "./../assets/blog5.jpeg";
import blog6 from "./../assets/blog6.jpeg";
import blog7 from "./../assets/blog7.jpeg";
import WhatsappButton from "../components/whatsappButton";

const blogData = {
  1: {
    title: "5 Styling Tips for Summer",
    date: "May 20, 2025",
    image: blog1,
    content: `
      Summer is all about staying cool while looking your best.
      Here are 5 key styling tips to keep in mind this season:
      1. Wear breathable fabrics like cotton and linen.
      2. Go for pastel and light colors.
      3. Layer smartly with sleeveless or cropped jackets.
      4. Use bold accessories to elevate simple outfits.
      5. Don’t forget stylish sunglasses and hats!
    `,
  },
  2: {
    title: "Top 10 Accessories in 2025",
    date: "May 18, 2025",
    image: blog2,
    content: `
      Accessories can make or break an outfit. In 2025,
        we're seeing a mix of classic elegance and bold statements.
        Top trends include:
        1. Minimalist gold jewelry.
        2. Chunky, oversized bags.
        3. Statement belts.
        4. Vintage-inspired scarves.
        5. Futuristic eyewear.
        6. Sustainable material accessories.
        7. Layered necklaces.
        8. Artisan-crafted pieces.
        9. Brightly colored footwear.
        10. Tech-integrated wearables.
    `,
  },
  3: {
    title: "How to Build a Capsule Wardrobe",
    date: "May 15, 2025",
    image: blog3,
    content: `
      Building a capsule wardrobe is about curating a collection of
        versatile, timeless pieces that can be mixed and matched
        to create numerous outfits. Here’s how to start:
        1. Define your style and lifestyle needs.
        2. Declutter your current wardrobe.
        3. Choose a neutral color palette.
        4. Invest in high-quality basics.
        5. Add a few statement pieces.
        6. Regularly review and update your capsule.
    `,
  },
  4: {
    title: "Understanding Fabric Types: A Guide for Shoppers",
    date: "May 10, 2025",
    image: blog4,
    content: `
      Knowing your fabrics is key to comfort and style.
        Here’s a quick guide to common fabric types:
        1. **Cotton:** Breathable, soft, and durable. Ideal for everyday wear.
        2. **Linen:** Lightweight and absorbent, perfect for warm weather. Tends to wrinkle easily.
        3. **Silk:** Luxurious, smooth, and drapes beautifully. Great for formal wear or delicate items.
        4. **Wool:** Warm, durable, and naturally moisture-wicking. Best for colder climates.
        5. **Polyester:** Durable, wrinkle-resistant, and quick-drying. Often blended with natural fibers.
        6. **Rayon/Viscose:** Soft and drapes well, often used as a silk substitute.
    `,
  },
  5: {
    title: "Sustainable Fashion: Making Eco-Friendly Choices",
    date: "April 28, 2025",
    image: blog5,
    content: `
      Sustainable fashion aims to minimize the environmental and social impact
        of clothing production. Here are ways to embrace eco-friendly choices:
        1. Shop from ethical and sustainable brands.
        2. Choose natural and recycled fabrics.
        3. Buy less, choose well, make it last.
        4. Repair and upcycle old clothes.
        5. Support second-hand and vintage fashion.
        6. Educate yourself on brand practices.    `,
  },
  6: {
    title: "Dress for Success: Office Wear Essentials",
    date: "April 22, 2025",
    image: blog6,
    content: `
      Dressing for success means balancing professionalism with personal style.
        Essential office wear pieces include:
        1. Well-tailored blazer.
        2. Crisp white and light-colored shirts.
        3. Versatile trousers or skirts.
        4. Comfortable yet stylish dress shoes.
        5. A classic watch.
        6. Quality leather bag.
        7. Simple, elegant accessories.    `,
  },
  7: {
    title: "The Ultimate Guide to Denim Fits",
    date: "April 15, 2025",
    image: blog7,
    content: `
      Finding the perfect pair of jeans can transform your wardrobe.
        Understand the different fits to find your match:
        1. **Skinny Fit:** Tapered from hip to ankle, hugging the leg.
        2. **Slim Fit:** Narrower than regular fit but not as tight as skinny.
        3. **Straight Fit:** Consistent width from thigh to ankle, classic and versatile.
        4. **Bootcut:** Slightly flared at the ankle to accommodate boots.
        5. **Relaxed Fit:** Looser through the seat and thigh for comfort.
        6. **Wide Leg:** Generous cut from the hip down, offering a flowy silhouette.
          `,
  },
};

function BlogDetail() {
  const { id } = useParams();
  const post = blogData[id];

  if (!post)
    return (
      <div className="text-center mt-12 text-gray-500">
        Blog post not found.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 mt-19">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
      <WhatsappButton />
    </div>
  );
}

export default BlogDetail;
