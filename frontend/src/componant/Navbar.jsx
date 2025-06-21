import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  console.log(token);
  const navigate = useNavigate();

  // Toggle Hamburger Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Optional: Notify the server (send a request to invalidate the token)
    // axios.post("/api/logout", {}, { headers: { Authorization: `Bearer ${token}` } });

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-black border-b border-blue-500 shadow-md">
      {/* Navbar Header */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-8">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
            alt="Croma Logo"
            className="h-[75px] w-[130px] object-contain sm:h-[60px] sm:w-[100px] md:h-[75px] md:w-[130px]"
          />
        </Link>

        {/* Search Box */}
        <div className="hidden sm:block flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products, brands, or categories"
            className="w-[80%] px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cart and Login Section */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          {token ? (
            <>
              <h1 className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                {email}
              </h1>

              <button
                onClick={handleLogout}
                to="/logout"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Login
              </Link>
              {/* /* Sign Up Button */}
              <Link
                to="/signup"
                className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-blue-500 rounded-md hover:bg-gray-200"
          >
            Cart
            <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
        </div>

        {/* Hamburger Button (Visible on All Screen Sizes) */}
        <button
          className="flex items-center px-3 py-2 border border-blue-500 rounded-md hover:bg-blue-100 sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Hidden by Default, Shows When Hamburger Icon is Clicked) */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4">
          <Link
            to="/signup"
            className="block px-4 py-2 text-white hover:bg-blue-500 rounded-md"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-white hover:bg-blue-500 rounded-md"
          >
            Login
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-2 text-white hover:bg-blue-500 rounded-md"
          >
            Cart
          </Link>
          {/* Additional Links */}
          <Link
            to="/exclusive"
            className="block px-4 py-2 text-white hover:bg-blue-500 rounded-md"
          >
            Exclusive at Croma
          </Link>
          <Link
            to="/brands"
            className="block px-4 py-2 text-white hover:bg-blue-500 rounded-md"
          >
            Top Brands
          </Link>
          <Link
            to="/croma-store-locator"
            className="block px-4 py-2 text-white hover:bg-blue-500 rounded-md"
          >
            Croma Store Locator
          </Link>
          <Link
            to="/gift-card"
            className="block px-4 py-2 text-white hover:bg-blue-500 rounded-md"
          >
            Gift Card
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
