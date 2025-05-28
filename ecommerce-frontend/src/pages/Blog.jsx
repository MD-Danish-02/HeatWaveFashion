import React from "react";
import { Link } from "react-router-dom";
import blog1 from "./../assets/blog1.jpeg";
import blog2 from "./../assets/blog2.jpeg";
import blog3 from "./../assets/blog3.jpeg";
import blog4 from "./../assets/blog4.jpeg";
import blog5 from "./../assets/blog5.jpeg";
import blog6 from "./../assets/blog6.jpeg";
import blog7 from "./../assets/blog7.jpeg";
import WhatsappButton from "../components/whatsappButton";

function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Styling Tips for Summer",
      date: "May 20, 2025",
      image: blog1,
      excerpt:
        "Stay cool and stylish with these top 5 summer styling tips for men and women in 2025.",
    },
    {
      id: 2,
      title: "Top 10 Accessories in 2025",
      date: "May 18, 2025",
      image: blog2,
      excerpt:
        "From minimal gold pieces to chunky bags, explore the trending accessories of this season.",
    },
    {
      id: 3,
      title: "How to Build a Capsule Wardrobe",
      date: "May 15, 2025",
      image: blog3,
      excerpt:
        "A minimalist guide to creating a versatile wardrobe without compromising on style.",
    },
    {
      id: 4,
      title: "Understanding Fabric Types: A Guide for Shoppers",
      date: "May 10, 2025",
      image: blog4,
      excerpt:
        "Learn about cotton, linen, silk, and more to make informed choices for your next purchase.",
    },
    {
      id: 5,
      title: "Sustainable Fashion: Making Eco-Friendly Choices",
      date: "April 28, 2025",
      image: blog5,
      excerpt:
        "Discover brands and practices that are leading the way in environmentally conscious fashion.",
    },
    {
      id: 6,
      title: "Dress for Success: Office Wear Essentials",
      date: "April 22, 2025",
      image: blog6,
      excerpt:
        "Navigate the corporate world with confidence. Essential pieces for a professional wardrobe.",
    },
    {
      id: 7,
      title: "The Ultimate Guide to Denim Fits",
      date: "April 15, 2025",
      image: blog7,
      excerpt:
        "From skinny to relaxed, find your perfect denim fit with our comprehensive guide.",
    },
  ];

  return (
    <section className="py-16 bg-white mt-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="block group rounded-xl overflow-hidden shadow hover:shadow-lg border border-gray-200 transition duration-300"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <div className="mt-4">
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <WhatsappButton />
    </section>
  );
}

export default Blog;
