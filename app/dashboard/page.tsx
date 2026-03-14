"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Dashboard() {

  const products = [
    { id: 1, name: "Jowar", price: 35 },
    { id: 2, name: "Rice", price: 50 },
    { id: 3, name: "Peanuts", price: 80 },
    { id: 4, name: "Wheat", price: 30 }
  ];

  const addToCart = (product:any, qty:number) => {

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const item = {
      ...product,
      quantity: qty,
      total: product.price * qty
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart");
  };

  return (
    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl mb-6">Farm Products</h1>

        <div className="grid grid-cols-3 gap-6">

          {products.map((product) => {

            const [qty, setQty] = useState(1);

            return (
              <div key={product.id} className="bg-white p-6 shadow rounded">

                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>

                <p>₹{product.price}/kg</p>

                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={qty}
                  onChange={(e)=>setQty(Number(e.target.value))}
                  className="border p-2 mt-3 w-full"
                />

                <p className="mt-2 text-green-600">
                  Total: ₹{product.price * qty}
                </p>

                <button
                  onClick={()=>addToCart(product, qty)}
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}
