import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar'; // Import Navbar (sudah sebagai Client Component)
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gerakan Penghijauan Indonesia',
  description: 'Platform untuk gerakan penghijauan dan pelestarian lingkungan di Indonesia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar /> {/* Navbar sudah menjadi Client Component */}
        {children}
        <footer className="bg-green-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-bold text-xl">Gojo</span>
                </div>
                <p className="text-gray-300">Bersama mewujudkan Indonesia yang lebih hijau dan lestari.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Tautan</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-white">Tentang Kami</Link></li>
                  <li><Link href="/events" className="text-gray-300 hover:text-white">Event</Link></li>
                  <li><Link href="/donate" className="text-gray-300 hover:text-white">Donasi</Link></li>
                  <li><Link href="/news" className="text-gray-300 hover:text-white">Berita</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Kontak</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Email: info@gojo.com</li>
                  <li>Tel: (021) 6354-7355</li>
                  <li>Surabaya, Indonesia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                </div>
              </div>
            </div>
            <div className="border-t border-green-800 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 Gojo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
