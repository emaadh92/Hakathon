const Footer = () => {
    return (
      <footer className="max-w-[1133.01px] h-[312px] mx-auto p-4 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Name, Title, and Quote */}
        <div>
          <h2 className="text-lg font-bold">Funior</h2>
          <p className="text-sm mt-2">
            "Inspiring lives through our work and dedication."
          </p>
        </div>
  
        {/* Column 2: Links */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>
  
        {/* Column 3: Help & Policies */}
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Payment Options</li>
            <li className="hover:underline cursor-pointer">Return Policy</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
  
        {/* Column 4: Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to stay updated.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm border-b border-gray-400 outline-none focus:border-black"
            />
          </form>
        </div>
  
        {/* Copyright Section */}
        <div className="col-span-1 md:col-span-4 text-center mt-6 text-xs border-t ">
          © {new Date().getFullYear()} Funior. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  