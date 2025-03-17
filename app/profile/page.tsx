"use client";

import { User, Mail, Phone, MapPin, Award, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const userProfile = {
    name: "Ahmad Rizki",
    email: "ahmad.rizki@email.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
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
        date: "20 April 2024",
        location: "Hutan Kota Bandung"
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
            <Button className="w-full mt-6">Edit Profile</Button>
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