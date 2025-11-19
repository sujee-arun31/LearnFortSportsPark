import React from "react";
import { FiArrowLeft, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const sports = [
    "Skating", "Basketball", "Football (Turf)", "Volleyball",
    "Cricket (Turf)", "Net Practice", "Pickleball", "Kabbadi",
    "Karate", "Athletic Track", "Archery", "Badminton (Outdoor)"
  ];

  const amenities = [
    "Lighting for Night Events",
    "Bowling Machine for Practice",
    "Open Gym",
    "Children Play Area",
    "Rest Rooms",
    "Food Court",
    "Walking Pathway",
    "EV Charging Station",
  ];

  const handleBack = () => navigate(-1);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#F4FAFF] text-gray-800 font-['Inter',sans-serif]">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white py-4 px-6 flex items-center shadow-lg sticky top-0 z-10"
      >
        <button
          onClick={handleBack}
          className="p-2 mr-3 hover:bg-[#ffffff22] rounded-full transition-all duration-200 hover:scale-110"
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-bold tracking-wide uppercase">
          About LearnFort
        </h1>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white px-6 py-14 md:py-20 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Welcome to LearnFort Sports Park
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Where passion meets performance in the heart of Dindigul
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      </motion.section>

      {/* About Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-blue-50 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
                  Our Story
                </span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At <span className="font-semibold text-[#0077B6]">LearnFort Sports Park</span>, we've built more than just a sports facility — we’ve created a community hub where athletes of all levels can train, compete, and grow.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spread across a massive <span className="font-semibold">14,000 sqft</span>, our state-of-the-art complex features professional-grade turfs and courts designed to meet international standards.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide a safe, inclusive, and energetic environment that inspires athletic excellence and fosters a lifelong love for sports and fitness.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1374&q=80"
                  alt="LearnFort Sports Park"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">14,000 sq.ft</h3>
                    <p className="text-sm text-blue-200">Premium Sports Facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sports Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
              Our Sports Facilities
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-blue-50 hover:border-blue-100 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">
                  {sport.includes("Basketball")
                    ? "🏀"
                    : sport.includes("Football")
                    ? "⚽"
                    : sport.includes("Cricket")
                    ? "🏏"
                    : sport.includes("Badminton")
                    ? "🏸"
                    : "🏅"}
                </span>
              </div>
              <h4 className="text-sm font-medium text-center text-gray-800">
                {sport}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Amenities Section */}
      <section className="py-12 bg-gradient-to-br from-[#E6F7FF] to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
                World-Class Amenities
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for athletes, by athletes. Everything you need for peak
              performance.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] mx-auto rounded-full mt-3"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#0077B6] group-hover:to-[#00B4D8] group-hover:text-white text-[#0077B6] transition-all duration-300">
                  ⚡
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#0077B6] transition-colors">
                  {item}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
