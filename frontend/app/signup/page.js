"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

    useEffect(() =>{
    const token = Cookies.get("token");
    if(token){
      router.push("/dashboard");
    }
  },[router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { name, email, password });
      setMessage("✅ Registration successful! Redirecting...");
      setTimeout(() => router.push("/signin"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="font-poppins min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800"> Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.175-6.125M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M9.88 9.88A3 3 0 0112 9c1.657 0 3 1.343 3 3 0 .512-.13.995-.36 1.42M6.1 6.1A9.956 9.956 0 002 12c0 5.523 4.477 10 10 10a9.956 9.956 0 005.9-1.9M16.12 16.12A3 3 0 0112 15c-1.657 0-3-1.343-3-3 0-.512.13-.995.36-1.42" />
              </svg>
            )}
          </button>
        </div>


        {message && <p className="text-sm text-center text-red-500">{message}</p>}

        <button
          type="submit"
          className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition"
        >
          Register
        </button>

        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-indigo-600 hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
