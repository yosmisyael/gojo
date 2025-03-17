"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, Award, TreePine, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

export default function Profile() {
  const [qrOpen, setQrOpen] = useState(false);

  const userProfile = {
    name: "Fahroldhi Sukirno",
    email: "fahroldhisukrino@gmail.com",
    phone: "+62 812-6786-7640",
    location: "Surabaya, Indonesia",
    contributions: [
      { label: "Pohon Ditanam", value: "25" },
      { label: "Event Diikuti", value: "8" },
      { label: "Total Donasi", value: "Rp 1.500.000" }
    ],
    achievements: [
      { title: "Green Warrior", description: "Menanam 25+ pohon" },
      { title: "Event Champion", description: "Mengikuti 5+ event" },
      { title: "Generous Donor", description: "Donasi lebih dari 1 juta" }
    ],
    upcomingEvents: [
      {
        title: "Penanaman 1000 Pohon",
        date: "20 April 2025",
        location: "Pembersihan Sungai Depan ITS"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Info */}
          <Card className="p-6">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-16 w-16 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold">{userProfile.name}</h1>
              <p className="text-gray-600">Green Warrior</p>
              <p className="text-gray-500 text-sm">Point: 150</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3" />
                <span>{userProfile.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                <span>{userProfile.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                <span>{userProfile.location}</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button className="w-full">Edit Profile</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full" variant="outline" onClick={() => setQrOpen(true)}>
                    <QrCode className="h-5 w-5 mr-2" /> QR Code
                  </Button>
                </DialogTrigger>
                <DialogContent className="p-6 text-center">
                  <h2 className="text-lg font-semibold mb-4">QR Code Profil</h2>
                  <Image className="mx-auto" src="/qr.png" alt="QR Code" width={200} height={200} />
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          {/* Contributions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Kontribusi</h2>
            <div className="grid grid-cols-1 gap-4">
              {userProfile.contributions.map((contribution, index) => (
                <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{contribution.value}</p>
                  <p className="text-gray-600">{contribution.label}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Pencapaian</h2>
            <div className="space-y-4">
              {userProfile.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <Award className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Card className="mt-6 p-6">
          <h2 className="text-xl font-semibold mb-6">Event Mendatang</h2>
          <div className="space-y-4">
            {userProfile.upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                <TreePine className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-sm text-gray-600">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
