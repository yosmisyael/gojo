"use client";

import { ArrowRight, Leaf, Calendar, Users, TreePine } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.2'
        }}></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-green-950 mb-6">
            Bersama Wujudkan<br />
            <span className="text-green-600">Bumi yang Lebih Hijau</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Mari bergabung dalam gerakan penghijauan untuk masa depan yang lebih baik. Setiap aksi kecil membawa perubahan besar.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Mulai Berkontribusi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Program Penghijauan</h3>
              <p className="text-gray-600">
                Berbagai program penanaman pohon dan pelestarian lingkungan di seluruh Indonesia.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Calendar className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Komunitas</h3>
              <p className="text-gray-600">
                Bergabung dalam kegiatan komunitas untuk berbagi pengetahuan dan pengalaman.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Donasi Hijau</h3>
              <p className="text-gray-600">
                Dukung program penghijauan melalui donasi untuk masa depan yang lebih baik.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dampak Positif Yang Telah Kita Capai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <p className="text-gray-600">Pohon Tertanam</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5K+</div>
              <p className="text-gray-600">Relawan Aktif</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Event Terlaksana</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
              <p className="text-gray-600">Kota Terjangkau</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}