import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "🔊 Speakers",
    "🎧 Headphones",
    "⌚ Wearables",
    "📺 Television",
    "💻 Computers",
    "🖱️ Accessories",
    "🏠 Smart Devices",
    "📷 Cameras",
    "📱 Mobile Phones"
  ];

  return (
    <nav className="w-full flex flex-col justify-center items-center relative">
      {/* Top Bar */}
      <div className="top-nav w-full flex justify-between items-center bg-black text-white px-[8%] lg:px-[12%] py-3 text-sm">
        <div className="flex w-1/2 gap-5 items-center">
          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-yellow-600">
              English ▼
            </span>
            <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 hidden group-hover:flex flex-col gap-2 z-50">
              <li className="cursor-pointer hover:text-yellow-600">Francais</li>
              <li className="cursor-pointer hover:text-yellow-600">Deutsch</li>
            </ul>
          </div>
          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-yellow-600">
              USD <span className="ml-1 text-xs">▼</span>
            </span>
            <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 hidden group-hover:flex flex-col gap-2 z-50">
              <li className="cursor-pointer hover:text-yellow-600">GBP</li>
              <li className="cursor-pointer hover:text-yellow-600">EUR</li>
              <li className="cursor-pointer hover:text-yellow-600">ZAR</li>
            </ul>
          </div>
        </div>
        <ul className="flex gap-5 w-1/2 justify-end items-center">
          <li className="text-yellow-400 flex items-center gap-1">
            <a href="#" className="hover:text-yellow-300 transition">
              Flash sale
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="bi bi-person-circle"></i> Account Login
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="bi bi-globe-americas"></i> Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Middle Nav */}
      <div className="middle-nav w-full flex justify-between items-center px-[5%] lg:px-[12%] py-6 gap-10">
        <div className="w-1/5">
          <Link to="/">
            <h2 className="text-5xl font-bricolage text-black font-bold">
              Agile<span className="text-yellow-500">Kart</span>
            </h2>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="product-search flex items-center h-14 border-4 border-yellow-500 rounded-md w-1/2 overflow-hidden">
          <select className="bg-gray-100 font-semibold p-2 w-1/3 border-none outline-none">
            <option>All Categories</option>
            <option>🔊 Speakers</option>
            <option>🎧 Headphones</option>
            <option>⌚ Wearables</option>
            <option>📺 Television</option>
            <option>💻 Computers</option>
            <option>🖱️ Accessories</option>
            <option>🏠 Smart Devices</option>
            <option>📷 Cameras</option>
            <option>📱 Mobile Phones</option>
          </select>

          <input 
            type="text" 
            placeholder="Search for products" 
            className="flex-1 px-3 py-2 outline-none font-medium bg-gray-100"
          />

          <button className="bg-yellow-500 text-white px-5 font-bold uppercase h-full hover:bg-yellow-600 transition">
            Search
          </button>
        </div>

        {/* Right side - Help, Wishlist, Cart */}
        <div className="flex gap-5 items-center w-1/3 justify-end">
          <div className="flex gap-2 items-center">
            <span className="text-gray-500"><i className="bi bi-telephone"></i></span>
            <span className="text-gray-500">Need</span>
            <span className="text-yellow-600 font-bold">+27656436819</span>
          </div>

          <Link to="/wishlist" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500"><i className="bi bi-suit-heart"></i></span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">My</span>
              <span className="text-yellow-600 font-bold">Wishlist</span>
            </div>
          </Link>

          <Link to="/cart" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500"><i className="bi bi-cart2"></i></span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">My</span>
              <span className="text-yellow-600 font-bold">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Bar - Categories & Menu */}
      <div className={`w-full px-[5%] lg:px-[12%] py-6 flex justify-start items-center gap-6 transition-all duration-500`}>
        {/* Categories Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center gap-2 cursor-pointer font-bold hover:text-yellow-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bi bi-list text-xl"></i>
            <span>Shop Categories</span>
          </div>

          {menuOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-md rounded-md overflow-hidden mt-2 w-48 z-40">
              {categories.map((category, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 border-b last:border-none hover:bg-gray-100 transition"
                  >
                    <span>{category}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Navigation Menu */}
        <ul className="flex gap-10 font-bold">
          <li>
            <Link to="/home" className="hover:text-yellow-500 text-lg transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500 text-lg transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-yellow-500 text-lg transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-yellow-500 text-lg transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-yellow-500 text-lg transition">
              FAQ's
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500 text-lg transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Today's Deal */}
        <Link to="/deals" className="flex items-center gap-3 ml-auto">
          <span className="text-2xl text-gray-600"><i className="bi bi-suit-heart"></i></span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">Today's Deal</span>
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm uppercase">
              HOT
            </span>
          </div>
        </Link>

        {/* Close Menu Button */}
        {menuOpen && (
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-2xl absolute top-4 right-4 cursor-pointer hover:text-red-600 transition"
          >
            ✕
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;