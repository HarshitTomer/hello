import { Home, Briefcase, MessageCircle } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white border-b-2 h-[10vh] border-gray-200 px-5 lg:px-20 py-4 flex justify-between items-center shadow-sm">
      <Link className="w-[15%]" href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img className="" src="/logo.png" alt="Job Portal Logo" />
        </div>
      </Link>
      <ul className="hidden md:flex gap-10 items-center font-semibold text-gray-600">
        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6" />
              Home
            </div>
          </Link>
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
          <Link href="/jobs">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Jobs
            </div>
          </Link>
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
          <Link href="/contact">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              Contact
            </div>
          </Link>
        </li>
      </ul>
      <div className="flex items-center w-[15%]">
        <AuthContextProvider>
          <LoginButton />
        </AuthContextProvider>
        <button className="ml-4 md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
