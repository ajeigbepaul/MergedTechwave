"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative px-24 max-lg:px-16 max-md:px-4 py-8 max-lg:py-6 max-md:py-4 border-b border-[#B7CFFF]">
    <div className="w-full flex items-center justify-center ">
      <div className="w-full flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/techwavelogo.svg"}
            width={160}
            height={200}
            alt="techwave-logo"
            className="object-contain"
          />
        </Link>

        {/* Show NavLinks only on large screens */}
        <nav className="hidden lg:flex">
          <NavLinks closeMenu={() => {}} />
        </nav>

        {/* Show the toggle button on both mobile and tablet (small to medium screens) */}
        <button
          onClick={toggleMenu}
          className="text-neutral-400 hover:text-white focus:outline-none flex lg:hidden" // Show on small and medium screens
          aria-label="Toggle menu"
        >
          <Image
            src={"/menu.svg"}
            alt="toggle"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </button>

        <Button
          onclick={() => router.replace("/contactus")}
          name="Contact us"
          buttonClass="p-3 w-40 bg-[#181818] text-white hidden lg:flex"
        />
      </div>
    </div>

    {/* Mobile and Tablet View */}
    <MobileNav isopen={isOpen} closeMenu={closeMenu} />
  </header>
  );
};

export default Header;
