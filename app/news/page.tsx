"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "Program Penghijauan Kota Berhasil Tanam 5000 Pohon",
    date: "15 April 2024",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
    excerpt: "Program penghijauan kota yang dilaksanakan selama tiga bulan berhasil menanam 5000 pohon di berbagai lokasi strategis.",
    category: "Program"
  },
  {
    id: 2,
    title: "Kolaborasi dengan Komunitas Lokal untuk Pelestarian Hutan",
    date: "12 April 2024",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80",
    excerpt: "Inisiatif baru melibatkan komunitas lokal dalam upaya pelestarian hutan dan pemberdayaan masyarakat sekitar.",
    category: "Komunitas"
  },
  {
    id: 3,
    title: "Tips Berkebun di Rumah untuk Pemula",
    date: "10 April 2024",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80",
    excerpt: "Panduan lengkap untuk memulai berkebun di rumah dengan metode yang sederhana dan efektif.",
    category: "Edukasi"
  }
];

export default function News() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-900 mb-8">Berita & Artikel</h1>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden">
          <div className="">
            <div className="h-32 md:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80"
                alt="Featured"
                className="w-full h-96"
              />
            </div>
            <div className="p-8">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
                Featured
              </span>
              <h2 className="text-2xl font-bold mb-4">
                Gerakan Nasional Penghijauan: Menuju Indonesia Lebih Hijau 2025
              </h2>
              <p className="text-gray-600 mb-6">
                Pemerintah bersama komunitas lingkungan meluncurkan program nasional penghijauan dengan target penanaman 100 juta pohon hingga tahun 2025.
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                18 April 2024
              </div>
              <Link href={"/news/1"}>
                <Button>
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href={"/news/1"}>
                  <Button variant="outline" className="w-full">
                    Baca Selengkapnya
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}