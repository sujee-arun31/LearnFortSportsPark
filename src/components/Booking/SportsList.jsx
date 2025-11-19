import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-datepicker/dist/react-datepicker.css";

const sports = [
  {
    id: "cricket",
    name: "Cricket",
    icon: "🏏",
    gradient: "from-sky-400 to-blue-600",
    description: "Experience world-class cricket facilities and coaching",
    popularity: 4.8,
  },
  {
    id: "football",
    name: "Football",
    icon: "⚽",
    gradient: "from-blue-400 to-blue-700",
    description: "Play the beautiful game on pro-grade turf fields",
    popularity: 4.9,
  },
  {
    id: "badminton",
    name: "Badminton",
    icon: "🏸",
    gradient: "from-sky-300 to-blue-500",
    description: "Smash and rally on our Olympic-standard courts",
    popularity: 4.6,
  },
  {
    id: "tennis",
    name: "Tennis",
    icon: "🎾",
    gradient: "from-blue-300 to-blue-600",
    description: "Grand Slam-level surfaces for elite matches",
    popularity: 4.7,
  },
  {
    id: "basketball",
    name: "Basketball",
    icon: "🏀",
    gradient: "from-sky-400 to-indigo-600",
    description: "Shoot hoops on world-class indoor and outdoor courts",
    popularity: 4.5,
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    icon: "🏓",
    gradient: "from-blue-400 to-sky-600",
    description: "Reflex-testing fun with pro-grade tables",
    popularity: 4.3,
  },
  {
    id: "volleyball",
    name: "Volleyball",
    icon: "🏐",
    gradient: "from-sky-400 to-indigo-700",
    description: "Enjoy indoor and beach volleyball experiences",
    popularity: 4.2,
  },
  {
    id: "swimming",
    name: "Swimming",
    icon: "🏊‍♂️",
    gradient: "from-cyan-400 to-blue-600",
    description: "Olympic-sized pools with professional coaching",
    popularity: 4.9,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SportsCard = ({ sport, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -6, scale: 1.03 }}
      className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${sport.gradient} opacity-0 group-hover:opacity-15 transition duration-500 rounded-2xl`}
      ></div>

      <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner mb-4 text-6xl">
          {sport.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-500 transition-all">
          {sport.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{sport.description}</p>
        <div className="flex items-center justify-center space-x-1 text-sm text-gray-700 mb-3">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>{sport.popularity.toFixed(1)}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full font-medium text-sm flex items-center shadow-md hover:shadow-lg"
        >
          Book Now
          <FiChevronRight className="ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const SportsList = ({ onBack }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const filteredSports = sports.filter(
    (sport) =>
      sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sport.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSportSelect = (id) => navigate(`/book/${id}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#EAF3FF] via-[#F3F8FF] to-[#E0EEFF] px-6 md:px-12 py-10 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          whileHover={{ x: -4 }}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800 font-medium bg-transparent border-none focus:outline-none"
        >
          <FiArrowLeft className="mr-2" /> Back to Booking
        </motion.button>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-extrabold text-center text-[#1E40AF] mb-10 tracking-wide"
        >
          Explore Available Sports
        </motion.h1>

        {/* Search and Filters */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
            <div className="relative flex-1 w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your favorite sport..."
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/80 shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto">
              {["all", "popular", "indoor", "outdoor", "team", "individual"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                        : "bg-white/80 border border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white/50 rounded-2xl p-6 h-64 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredSports.map((sport) => (
              <SportsCard
                key={sport.id}
                sport={sport}
                onClick={() => handleSportSelect(sport.id)}
              />
            ))}
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          className="mt-16 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>
            Can’t find what you’re looking for?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact support
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SportsList;
