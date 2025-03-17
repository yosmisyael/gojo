"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TreePine, Heart, Sprout } from "lucide-react";

export default function Donate() {
  const [amount, setAmount] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Donasi untuk Bumi yang Lebih Hijau</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap donasi Anda akan digunakan untuk program penanaman pohon dan pelestarian lingkungan.
          </p>
        </div>

        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Pilih Jumlah Donasi</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                  variant="outline"
                  className={amount === "50000" ? "bg-green-100" : ""}
                  onClick={() => setAmount("50000")}
                >
                  Rp 50.000
                </Button>
                <Button
                  variant="outline"
                  className={amount === "100000" ? "bg-green-100" : ""}
                  onClick={() => setAmount("100000")}
                >
                  Rp 100.000
                </Button>
                <Button
                  variant="outline"
                  className={amount === "250000" ? "bg-green-100" : ""}
                  onClick={() => setAmount("250000")}
                >
                  Rp 250.000
                </Button>
                <Button
                  variant="outline"
                  className={amount === "500000" ? "bg-green-100" : ""}
                  onClick={() => setAmount("500000")}
                >
                  Rp 500.000
                </Button>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Atau masukkan jumlah lain
                </label>
                <Input
                  type="number"
                  placeholder="Rp"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Lanjutkan Donasi
                <Heart className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Dampak Donasi Anda</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <TreePine className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Penanaman Pohon</h3>
                    <p className="text-sm text-gray-600">
                      Setiap Rp 50.000 = 1 pohon ditanam
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sprout className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Perawatan</h3>
                    <p className="text-sm text-gray-600">
                      Pemeliharaan pohon hingga tumbuh mandiri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}