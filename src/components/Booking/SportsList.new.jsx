import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiSearch, FiCalendar, FiStar } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const sports = [
  {
    id: "cricket",
    name: "Cricket",
    icon: "🏏",
    gradient: "bg-gradient-to-r from-amber-400 to-amber-500",
    description: "Experience the gentleman's game with top-notch facilities",
    popularity: 4.8,
  },
  {
    id: "football",
    name: "Football",
    icon: "⚽",
    gradient: "bg-gradient-to-r from-emerald-400 to-emerald-500",
    description: "Play the beautiful game on our professional-grade pitches",
    popularity: 4.9,
  },
  {
    id: "badminton",
    name: "Badminton",
    icon: "🏸",
    gradient: "bg-gradient-to-r from-blue-400 to-blue-500",
    description: "Fast-paced action on Olympic-standard courts",
    popularity: 4.6,
  },
  {
    id: "tennis",
    name: "Tennis",
    icon: "🎾",
    gradient: "bg-gradient-to-r from-rose-400 to-rose-500",
    description: "Grand Slam experience with professional surfaces",
    popularity: 4.7,
  },
  {
    id: "basketball",
    name: "Basketball",
    icon: "🏀",
    gradient: "bg-gradient-to-r from-orange-400 to-orange-500",
    description: "Dunk and shoot on our professional courts",
    popularity: 4.5,
  },
  {
    id: "swimming",
    name: "Swimming",
    icon: "🏊",
    gradient: "bg-gradient-to-r from-cyan-400 to-cyan-500",
    description: "Olympic-sized pool with professional coaching",
    popularity: 4.8,
  },
];

const SportsCard = ({ sport, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
      onClick={onClick}
    >
      <div className="p-6">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 ${sport.gradient}`}>
          {sport.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {sport.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{sport.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <FiStar className="text-yellow-400 mr-1" />
          <span className="font-medium text-gray-700">{sport.popularity}</span>
          <span className="mx-2">•</span>
          <span>Popular</span>
        </div>
      </div>
    </motion.div>
  );
};

const SportsList = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const filteredSports = sports.filter((sport) =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSportSelect = (sportId) => {
    navigate(`/booking/${sportId}`, {
      state: { date: selectedDate },
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#F8FFF8] text-gray-800 font-['Inter',sans-serif] pb-12">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-gray-100 mr-4"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Available Sports</h1>
          </div>
          
          {/* Search and Date Picker */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Search sports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="h-5 w-5 text-gray-400" />
              </div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholderText="Select date"
                dateFormat="MMMM d, yyyy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <motion.main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredSports.length === 0 ? (
          <motion.div
            className="text-center py-12"
            variants={item}
          >
            <p className="text-gray-500 text-lg">No sports found matching your search.</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
          >
            {filteredSports.map((sport) => (
              <motion.div key={sport.id} variants={item}>
                <SportsCard
                  sport={sport}
                  onClick={() => handleSportSelect(sport.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.main>
    </div>
  );
};

export default SportsList;
