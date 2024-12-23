import React from "react";
import { Phone, MapPin, MailOpen } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 rounded-md min-h-[30vh] bg-[#f4f8f9] p-4 sm:p-8">
        {/* Brand Section */}
        <div className="flex flex-col justify-center items-center text-center sm:text-left">
          <div className="font-extrabold text-2xl sm:text-3xl">Mebius</div>
          <div className="font-light mt-2">Online web store</div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col justify-center items-center text-center sm:text-left">
          <div className="font-extralight text-xl mb-2">Contact Us:</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +94 72 369 4 458
            </div>
            <div className="flex items-center gap-2">
              <MailOpen className="w-5 h-5" />
              mebius@outlook.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              23/A, G.H Perera Mw, Maradana
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center items-center bg-[#8e9b9e] text-white text-sm py-4">
        ©2024 Mebius, All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
