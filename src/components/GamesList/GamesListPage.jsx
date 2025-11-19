import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFootballBall,
  FaBasketballBall,
  FaRunning,
  FaVolleyballBall,
  FaSkating,
  FaBowlingBall,
  FaDumbbell,
  FaTableTennis,
  FaBullseye,
  FaBaseballBall,
  FaArrowLeft,
} from "react-icons/fa";

const games = [
  { id: 1, name: "Skating", icon: <FaSkating className="w-8 h-8" /> },
  { id: 2, name: "Pickle Ball", icon: <FaBowlingBall className="w-8 h-8" /> },
  { id: 3, name: "Basketball", icon: <FaBasketballBall className="w-8 h-8" /> },
  { id: 4, name: "Kabaddi", icon: <FaDumbbell className="w-8 h-8" /> },
  { id: 5, name: "Football (Turf) 14,000sqft", icon: <FaFootballBall className="w-8 h-8" /> },
  { id: 6, name: "Karate", icon: <FaRunning className="w-8 h-8" /> },
  { id: 7, name: "Volleyball", icon: <FaVolleyballBall className="w-8 h-8" /> },
  { id: 8, name: "Athletic Track", icon: <FaRunning className="w-8 h-8" /> },
  { id: 9, name: "Cricket (Turf)", icon: <FaBaseballBall className="w-8 h-8" /> },
  { id: 10, name: "Archery", icon: <FaBullseye className="w-8 h-8" /> },
  { id: 11, name: "Cricket (Net Practice)", icon: <FaBaseballBall className="w-8 h-8" /> },
  { id: 12, name: "Badminton (Outdoor)", icon: <FaTableTennis className="w-8 h-8" /> },
];

const GamesListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAF3FF] to-[#F7FBFF] text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-[#1E40AF] shadow-md sticky top-0 z-10 border-b border-blue-200">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-white tracking-wide">
            Games & Facilities
          </h1>
        </div>
      </div>

      {/* Games Grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => navigate(`/game/${game.id}`)}
              className="group bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-lg hover:border-[#1E40AF]/40 hover:scale-[1.03] transition-all cursor-pointer flex flex-col items-center justify-center p-6 relative overflow-hidden"
            >
              {/* Background accent blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="mb-4 bg-[#1E40AF]/10 rounded-full p-4 flex items-center justify-center shadow-inner group-hover:bg-[#1E40AF]/20 transition-all duration-300">
                <div className="text-[#1E40AF] group-hover:scale-110 transition-transform duration-300">
                  {game.icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-sm sm:text-base font-semibold text-center tracking-wide text-gray-800 group-hover:text-[#1E3A8A] transition-colors">
                {game.name}
              </h2>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E40AF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesListPage;
