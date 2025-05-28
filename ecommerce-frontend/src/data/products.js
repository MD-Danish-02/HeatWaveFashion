import jacket from "./../assets/jacket.jpeg";
import jacket2 from "./../assets/jacket2.jpeg";
import jacket3 from "./../assets/jacket3.jpeg";
import hoodie from "./../assets/hoodie.jpeg";
import hoodie2 from "./../assets/hoodie2.jpeg";
import jeans from "./../assets/wide.jpeg";
import jeans2 from "./../assets/jeans2.jpeg";
import sneaker from "./../assets/sneaker.jpeg";
import sneaker2 from "./../assets/sneaker2.jpeg";
import satinSlipDress from "./../assets/satinSlipDress.jpeg";
import satinSlipDress2 from "./../assets/satinSlipDress2.jpeg";
import satinSlipDress3 from "./../assets/satinSlipDress3.jpeg";
import shirt from "./../assets/stylishShirt.jpeg";
import shirt2 from "./../assets/shirt2.jpeg";
import shirt3 from "./../assets/shirt3.jpeg";
import backpack from "./../assets/backpack.jpeg";
import backpack2 from "./../assets/backpack2.jpeg";
import cap from "./../assets/cap.jpeg";
import cap2 from "./../assets/cap2.jpeg";
import sunglass from "./../assets/sunglass.jpeg";
import sunglass2 from "./../assets/sunglass2.jpeg";
import sunglass3 from "./../assets/sunglass3.jpeg";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Satin Slip Dress",
    price: 559,
    images: [satinSlipDress, satinSlipDress2, satinSlipDress3],
    category: "Dresses",
    gender: "Women",
    description:
      "Elegant and comfortable satin slip dress, perfect for a night out or a casual chic look.",
    rating: 4.5,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: "rev101",
        user: "Alice Wonderland",
        rating: 5,
        comment:
          "Absolutely stunning dress! The satin feels luxurious and it fits perfectly. Got so many compliments.",
        date: "2024-05-15",
      },
      {
        id: "rev102",
        user: "Bella Swan",
        rating: 4,
        comment:
          "Very pretty and comfortable. The color is slightly different than pictured but still lovely.",
        date: "2024-05-20",
      },
    ],
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 999,
    images: [jacket, jacket2, jacket3],
    category: "Jackets",
    gender: "Unisex",
    description:
      "A timeless essential, our denim jacket offers durability and style. Perfect for layering.",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL", "XXL"],
    reviews: [
      {
        id: "rev201",
        user: "Charlie Brown",
        rating: 5,
        comment: "Best denim jacket I've owned. Great quality and perfect fit.",
        date: "2024-04-10",
      },
      {
        id: "rev202",
        user: "Diana Prince",
        rating: 5,
        comment: "Love the classic look and feel. It's very versatile.",
        date: "2024-05-01",
      },
      {
        id: "rev203",
        user: "Edward Scissorhands",
        rating: 4,
        comment: "Good jacket, a bit stiff at first but softens up.",
        date: "2024-05-18",
      },
    ],
  },
  {
    id: 3,
    name: "Comfy Oversized Hoodie",
    price: 399,
    images: [hoodie, hoodie2],
    category: "Hoodies",
    gender: "Unisex",
    description:
      "Soft and cozy oversized hoodie for ultimate comfort and a relaxed fit.",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL", "XXL"],
    reviews: [
      {
        id: "rev301",
        user: "Fiona Gallagher",
        rating: 5,
        comment:
          "So comfy! I live in this hoodie now. The oversized fit is perfect.",
        date: "2024-05-22",
      },
    ],
  },
  {
    id: 4,
    name: "Wide-Leg High-Waist Jeans",
    price: 649,
    images: [jeans, jeans2, jacket3],
    category: "Jeans",
    gender: "Women",
    description:
      "Trendy wide-leg jeans with a flattering high-waist design, offering both comfort and modern style.",
    rating: 4.6,
    sizes: ["26", "28", "30", "32", "34"],
    reviews: [
      {
        id: "rev401",
        user: "Grace Adler",
        rating: 4,
        comment: "Stylish and comfortable. The wide leg is very on-trend.",
        date: "2024-03-30",
      },
      {
        id: "rev402",
        user: "Harry Potter",
        rating: 5,
        comment:
          "Bought these for my friend, and she loves them! Says they fit perfectly.",
        date: "2024-04-15",
      },
    ],
  },
  {
    id: 5,
    name: "Stylish Casual Sneakers",
    price: 899,
    images: [sneaker, sneaker2],
    category: "Footwear",
    gender: "Unisex",
    description:
      "Comfortable and stylish sneakers suitable for both men and women, designed for everyday wear.",
    rating: 4.6,
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    reviews: [
      {
        id: "rev501",
        user: "Iris West",
        rating: 5,
        comment: "Super comfortable and they look great with everything!",
        date: "2024-05-05",
      },
      {
        id: "rev502",
        user: "John Doe",
        rating: 4,
        comment: "Good quality sneakers, very stylish. Took a day to break in.",
        date: "2024-05-12",
      },
    ],
  },
  {
    id: 6,
    name: "Men's Stylish Shirt",
    price: 329,
    images: [shirt, shirt2, shirt3],
    category: "Shirts",
    gender: "Men",
    description:
      "Lightweight and breathable casual shirt for men, ideal for everyday wear.",
    rating: 4.3,
    sizes: ["S", "M", "L", "XL", "XXL"],
    reviews: [
      {
        id: "rev601",
        user: "Kevin McCallister",
        rating: 4,
        comment: "Nice shirt for the price. Material is light and comfortable.",
        date: "2024-04-25",
      },
    ],
  },
  {
    id: 7,
    name: "Travel Backpack",
    price: 1299,
    images: [backpack, backpack2],
    category: "Bags",
    gender: "Unisex",
    description:
      "Durable and spacious backpack for all your travel and daily needs.",
    rating: 4.7,
    sizes: ["One Size"],
    reviews: [
      {
        id: "rev701",
        user: "Laura Croft",
        rating: 5,
        comment:
          "Excellent backpack! Took it on a week-long trip and it held up perfectly. Lots of compartments.",
        date: "2024-03-10",
      },
    ],
  },
  {
    id: 8,
    name: "Classic Baseball Cap",
    price: 199,
    images: [cap, cap2],
    category: "Accessories",
    gender: "Unisex",
    description:
      "A classic baseball cap for everyday style and sun protection.",
    rating: 4.2,
    sizes: ["Adjustable"],
    reviews: [
      {
        id: "rev801",
        user: "Mike Wheeler",
        rating: 5,
        comment: "Simple, classic, does the job. Good quality.",
        date: "2024-05-02",
      },
    ],
  },
  {
    id: 9,
    name: "Retro Round Sunglasses",
    price: 249,
    images: [sunglass, sunglass2, sunglass3],
    category: "Accessories",
    gender: "Unisex",
    description:
      "Stylish retro sunglasses with UV protection, perfect for any sunny day.",
    rating: 4.5,
    sizes: ["One Size"],
    reviews: [
      {
        id: "rev901",
        user: "Nancy Drew",
        rating: 5,
        comment:
          "Love these sunglasses! They look very chic and provide good sun protection.",
        date: "2024-04-18",
      },
      {
        id: "rev902",
        user: "Oliver Queen",
        rating: 4,
        comment: "Cool design, feel a bit light but good for the price.",
        date: "2024-05-23",
      },
    ],
  },
];

export default ALL_PRODUCTS;
