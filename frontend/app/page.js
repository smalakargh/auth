'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 font-poppins px-4">
      <nav className="flex gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/signup"
            className="bg-amber-50 flex px-4 py-2 rounded-lg text-black shadow-md"
          >
            Sign Up
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/signin"
            className="bg-amber-50 flex px-4 py-2 rounded-lg text-black shadow-md"
          >
            Sign In
          </Link>
        </motion.div>
      </nav>
    </div>
  );
}
