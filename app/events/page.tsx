"use client";

import { Calendar, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Penanaman 100 Pohon",
    date: "20 April 2025",
    location: "Surabaya, Indonesia",
    time: "08:00 - 12:00 WIB",
    image: "/img1.webp",
    description: "Mari bergabung dalam kegiatan penanaman 1000 pohon untuk menghijaukan kota Bandung."
  },
  {
    id: 2,
    title: "Penanaman dan Pembersihan Sungai Keputih",
    date: "25 April 2025",
    location: "Surabaya, Jakarta",
    time: "09:00 - 11:00 WIB",
    image: "/img2.jpg",
    description: "Belajar teknik berkebun di area perkotaan dengan metode yang efektif dan ramah lingkungan."
  },
  // Add more events as needed
];

export default function Events() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-900 mb-8">Event Penghijauan</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Daftar Event
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}