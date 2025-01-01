import { User, Search, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-[1286px] mx-auto w-full h-[100px] flex flex-wrap items-center justify-between px-4 sm:px-8">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Image src="/logo.jpg" alt="funiro"  width={500}  height={500} className="w-[120px] h-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center space-x-4 text-sm font-medium mt-4 md:mt-0">
        <li className="hover:underline cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <User className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Link href="/checklist">
          <Heart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        </Link>
        <Link href="/cart"><ShoppingCart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
