// src/components/Header.js
import Link from "next/link";

import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-around items-center bg-white  text-black p-4 ">
      {/* Logo */}
      <div className="text-lg font-bold">MyShop</div>

      {/* Navigation Links */}
      <nav className="flex text-[16px]  gap-5">
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </nav>

      {/* Icons */}
      <div className="flex space-x-4">
        <CiUser />

        <CiSearch />
        <CiHeart />

        <MdOutlineShoppingCart />
      </div>
    </header>
  );
};

export default Header;
