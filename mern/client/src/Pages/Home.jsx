import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import camera1 from "../assets/camera1.png";
import camera2 from "../assets/camera2.png";
import camera3 from "../assets/camera3.png";

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Polaroid Go Instant Camera",
      color: "Black",
      rating: 4.7,
      price: 129.99,
      image: camera1,
    },
    {
      id: 2,
      name: "Polaroid Now i-Type Instant Camera",
      color: "Yellow",
      rating: 4.5,
      price: 149.99,
      image: camera2,
    },
    {
      id: 3,
      name: "Polaroid Go Generation 2 Instant Camera",
      color: "White",
      rating: 4.8,
      price: 159.99,
      image: camera3,
    },
  ];

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="text-center mt-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Bestsellers</h1>
        <p className="text-gray-600 mt-2">Find Your Perfect Camera</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
