"use client";

import Navbar from "../../components/Navbar";

export default function Cart() {

  const cart =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [];

  return (
    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl mb-6">Your Cart</h1>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item:any, index:number)=>(
          <div key={index} className="border p-4 mb-4">

            <h2 className="text-xl">{item.name}</h2>

            <p>Price: ₹{item.price}/kg</p>

            <p>Quantity: {item.quantity} kg</p>

            <p className="text-green-600">
              Total: ₹{item.total}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}
