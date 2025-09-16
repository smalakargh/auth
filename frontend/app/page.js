import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <nav className="flex gap-4">
          <Link href="/signup" className="bg-amber-50 flex px-4 py-2 rounded-lg text-black ">Sign Up</Link>
          <Link href="/signin" className="bg-amber-50 flex px-4 py-2 rounded-lg text-black">Sign In</Link>
        </nav>
    </div>
  );
}
