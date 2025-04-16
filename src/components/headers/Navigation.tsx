"use client";
import React, { useState, useRef, useEffect } from "react";
import Wrapper from "../Wrappper";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Wrapper>
      <div className="relative z-50 flex items-center justify-between py-6">
        {/* Logo with Home redirect */}
        <Link href="/" className="ml-[-15px]">
  <div className="relative border-black w-[210px] h-[75px]">


    {/* Logo Image inside Triangle */}
    <img
      src="/icons/logo1.png"
      alt="logo"
      width={200}
      height={70}
      className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] object-contain"
      style={{
        clipPath: "polygon(50% -0.5px, 75% 85%, 25% 85%)",
      }}
    />
  </div>
</Link>



        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/blogs" className="hover:text-primary transition">Features</Link>
          <Link href="/projects" className="hover:text-primary transition">Projects</Link>
          <Link href="/about" className="hover:text-primary transition">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 right-4 w-48 bg-background shadow-lg rounded-lg sm:hidden border border-gray-200"
          >
            <Link href="/" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/blogs" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="/projects" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/about" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navigation;
