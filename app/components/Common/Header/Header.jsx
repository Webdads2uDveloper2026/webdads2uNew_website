"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-15 py-4 flex items-center justify-between">
                <div className="text-xl font-semibold tracking-wide">
                    <span className="text-gray-800">Webdads2u</span>
                </div>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                    <a className="hover:text-black transition" href="#">About</a>
                    <a className="hover:text-black transition" href="#">Services</a>
                    <a className="hover:text-black transition" href="#">Works</a>
                    <a className="hover:text-black transition" href="#">Reach us</a>
                </nav>
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>
            {open && (
                <div className="md:hidden bg-white  shadow-md">
                    <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
                        <a onClick={() => setOpen(false)} href="#">Home</a>
                        <a onClick={() => setOpen(false)} href="#">Shop</a>
                        <a onClick={() => setOpen(false)} href="#">Collections</a>
                        <a onClick={() => setOpen(false)} href="#">About</a>
                        <a onClick={() => setOpen(false)} href="#">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
