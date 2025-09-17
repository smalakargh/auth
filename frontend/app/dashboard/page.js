"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { decodeJwt } from "../../utils/decodeJwt";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/signin");
      return;
    }

    const decoded = decodeJwt(token);
    if (!decoded) {
      Cookies.remove("token");
      router.push("/signin");
      return;
    }

    setUser(decoded);
  }, [router]);

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 font-poppins px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        {user ? (
          <>
            <p className="text-lg text-gray-700">Welcome, <span className="font-semibold">{user.name}</span>!</p>
            <button
              onClick={handleLogout}
              className="mt-4 w-full cursor-pointer py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition"
            >
             Logout
            </button>
          </>
        ) : (
          <p className="text-gray-600">Loading user data...</p>
        )}
      </div>
    </div>
  );
}
