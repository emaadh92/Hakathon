import { User, Search, Heart, ShoppingCart} from "lucide-react";
import Link from "next/link";



const Navbar = () => {
  return (
    <nav className="max-w-[1286px] mx-auto w-full h-[100px] flex items-center justify-between px-4 sm:px-8">
      {/* Logo */}
      <div className="text-lg font-bold">
        <img src="/logo.jpg" alt="funiro" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li className="hover:underline cursor-pointer"><Link href="/">Home</Link></li>
        <li className="hover:underline cursor-pointer"><Link href="/shop">Shop</Link></li>
        <li className="hover:underline cursor-pointer"><Link href="/blog">Blog</Link></li>
        <li className="hover:underline cursor-pointer"><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <User className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Heart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <ShoppingCart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="block text-black focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
