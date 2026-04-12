"use client";

import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);

      // ✅ redirect
      window.location.href = "/dashboard";

    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 relative overflow-hidden">

      {/* 🔝 TOP TEXT */}
      <div className="absolute top-10 text-center text-white">
        <h1 className="text-5xl font-bold">LeadSense AI</h1>
        <p className="text-gray-200 mt-2">
          Predict the leads that actually convert
        </p>
      </div>

      {/* Background */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-30 blur-3xl rounded-full top-[-200px] left-[-200px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-3xl rounded-full bottom-[-200px] right-[-200px] animate-pulse"></div>

      {/* Main Container */}
      <div
        className="flex w-[900px] h-[500px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-700"
      >

        {/* LEFT */}
        <div className="w-1/2 flex flex-col justify-center items-center text-white p-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Hello, Friend!</h1>
          <p className="text-gray-200">
            Enter your credentials and start using AI driven lead intelligence.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 bg-white rounded-r-2xl p-10 flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-black"
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-black"
            />

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition">
              Sign In
            </button>

          </form>
        </div>
      </div>

      {/* 🔽 BOTTOM TEXT */}
      <div className="absolute bottom-10 text-center text-white px-4">
        <p className="text-lg font-medium">
          AI-powered lead scoring to identify high-value prospects instantly
        </p>
        <p className="text-sm text-gray-200 mt-1">
          Analyze behavior • Predict conversions • Close deals faster
        </p>
      </div>

    </div>
  );
}
