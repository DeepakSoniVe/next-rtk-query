"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

const baseballTournaments = [
  {
    name: "National Baseball Championship",
    city: "Jaipur",
    date: "July 15-20, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Yankee Stadium",
    teams: 16,
    prize: "$500,000",
    registrationDeadline: "June 30, 2025",
    contact: "+91-1234567890",
  },
  {
    name: "West Coast Baseball Classic",
    city: "Noida",
    date: "August 5-10, 2025",
    time: "12:00 PM - 8:00 PM",
    venue: "Dodger Stadium",
    teams: 20,
    prize: "$300,000",
    registrationDeadline: "July 25, 2025",
    contact: "+91-1234567890",
  },
  {
    name: "Southern League Invitational",
    city: "Delhi",
    date: "September 10-15, 2025",
    time: "11:00 AM - 7:00 PM",
    venue: "Truist Park",
    teams: 12,
    prize: "$250,000",
    registrationDeadline: "August 31, 2025",
    contact: "+91-1234567890",
  },
  {
    name: "Midwest Baseball Cup",
    city: "Banaras",
    date: "October 3-8, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Wrigley Field",
    teams: 18,
    prize: "$400,000",
    registrationDeadline: "September 20, 2025",
    contact: "+91-1234567890",
  },
  {
    name: "International Baseball Masters",
    city: "Ahmedabad",
    date: "November 12-18, 2025",
    time: "1:00 PM - 9:00 PM",
    venue: "Tokyo Dome",
    teams: 24,
    prize: "$1,000,000",
    registrationDeadline: "October 30, 2025",
    contact: "+91-1234567890",
  },
];

const TournamentCard = ({
  tournament,
}: {
  tournament: (typeof baseballTournaments)[0];
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl font-bold text-blue-700">{tournament.name}</h2>

      <p className="text-gray-700 mt-2">
        📍 <strong>City:</strong> {tournament.city}
      </p>
      <p className="text-gray-700">
        📅 <strong>Date:</strong> {tournament.date}
      </p>
      <p className="text-gray-700">
        ⏰ <strong>Time:</strong> {tournament.time}
      </p>
      <p className="text-gray-700">
        🏟 <strong>Venue:</strong> {tournament.venue}
      </p>
      <p className="text-gray-700">
        🏆 <strong>Teams:</strong> {tournament.teams}
      </p>
      <p className="text-gray-700">
        💰 <strong>Prize:</strong> {tournament.prize}
      </p>
      <p className="text-gray-700 font-medium mt-2">
        📞 Contact: {tournament.contact}
      </p>
      <p className="text-red-500 font-medium mt-2">
        ⏳ Registration Deadline: {tournament.registrationDeadline}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        ⚾ Upcoming Baseball Tournaments ⚾
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {baseballTournaments.map((tournament, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1, zIndex: 1 }}
            whileHover={{
              zIndex: 2,
              scale: 1.05,
              transition: { easeInOut, duration: 0.2 },
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <TournamentCard key={index} tournament={tournament} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
