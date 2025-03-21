"use client"; // Ini harus ada di baris pertama

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logo.png" alt="Logo" width={100} height={100} />
                    </Link>
                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-green-600">Beranda</Link>
                        <Link href="/events" className="text-gray-600 hover:text-green-600">Event</Link>
                        <Link href="/donate" className="text-gray-600 hover:text-green-600">Donasi</Link>
                        <Link href="/news" className="text-gray-600 hover:text-green-600">Berita</Link>
                        <Link href="/profile" className="text-gray-600 hover:text-green-600">Profil</Link>
                        <Link href="/rewards" className="block text-gray-600 hover:text-green-600">Rewards</Link>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 py-2 space-y-2">
                        <Link href="/" className="block text-gray-600 hover:text-green-600">Beranda</Link>
                        <Link href="/events" className="block text-gray-600 hover:text-green-600">Event</Link>
                        <Link href="/donate" className="block text-gray-600 hover:text-green-600">Donasi</Link>
                        <Link href="/news" className="block text-gray-600 hover:text-green-600">Berita</Link>
                        <Link href="/profile" className="block text-gray-600 hover:text-green-600">Profil</Link>
                        <Link href="/rewards" className="block text-gray-600 hover:text-green-600">Rewards</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
