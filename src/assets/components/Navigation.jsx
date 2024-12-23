import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

function Navigation() {
  const { cart } = useContext(cartContext);
  const { user } = useUser();

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-[#f4f8f9] font-inter">
      {/* Logo and Links */}
      <div className="flex gap-4 items-center justify-between w-full md:w-auto">
        <Link className="font-extrabold text-2xl" to="/">
          Mebius
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-600">
            Shop
          </Link>
        </div>
      </div>

      {/* Cart and User Options */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Cart */}
        <Link to="/cart" className="flex items-center gap-2">
          <p>
            {cart.reduce((acc, el) => acc + el.count, 0)}
          </p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Cart
          </div>
        </Link>

        {/* Signed-In User */}
        <SignedIn>
          <div className="flex items-center gap-x-4">
            Hi, {user?.firstName}
            <UserButton />
          </div>
        </SignedIn>

        {/* Signed-Out User */}
        <SignedOut>
          <div className="flex items-center gap-x-4">
            <Link to="/sign-in" className="relative">
              Sign In
            </Link>
            <Link to="/sign-up" className="relative">
              Sign Up
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navigation;
