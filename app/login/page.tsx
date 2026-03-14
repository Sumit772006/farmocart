"use client";

export default function Login() {

  const login = () => {

    localStorage.setItem("user", "true");

    alert("Login Successful");

    window.location.href="/dashboard";
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-white p-8 shadow rounded w-80">

        <h1 className="text-2xl mb-4">Login / Signup</h1>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button
          onClick={login}
          className="bg-green-600 text-white w-full p-2 rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}
