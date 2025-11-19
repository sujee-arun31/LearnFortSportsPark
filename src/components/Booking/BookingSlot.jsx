import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiClock, FiUsers, FiCheck, FiCalendar } from "react-icons/fi";
import BookingConfirmation from "./BookingConfirmation";

const sportColors = {
  cricket: "from-amber-500 to-amber-600",
  football: "from-emerald-500 to-emerald-600",
  badminton: "from-blue-500 to-blue-600",
  tennis: "from-red-500 to-red-600",
  basketball: "from-orange-500 to-orange-600",
  "table-tennis": "from-purple-500 to-purple-600",
  default: "from-indigo-500 to-indigo-600",
};

// 24-hour slots
const timeSlots = [
  "12:00 AM - 01:00 AM", "01:00 AM - 02:00 AM", "02:00 AM - 03:00 AM",
  "03:00 AM - 04:00 AM", "04:00 AM - 05:00 AM", "05:00 AM - 06:00 AM",
  "06:00 AM - 07:00 AM", "07:00 AM - 08:00 AM", "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM", "04:00 PM - 05:00 PM", "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM", "07:00 PM - 08:00 PM", "08:00 PM - 09:00 PM",
  "09:00 PM - 10:00 PM", "10:00 PM - 11:00 PM", "11:00 PM - 12:00 AM",
].map((time, i) => ({
  id: i + 1,
  time,
  available: Math.random() > 0.2, // random 80% availability
}));

const BookingSlot = () => {
  const { sportType } = useParams();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [players, setPlayers] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const sportName = sportType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const gradientClass = sportColors[sportType] || sportColors.default;

  const handleBooking = () => {
    if (!selectedDate || !selectedSlot) {
      alert("Please select both date and time slot");
      return;
    }
    
    // Calculate amount based on players and sport type
    const basePrice = {
      cricket: 1500,
      football: 2000,
      badminton: 400,
      tennis: 600,
      basketball: 800,
      'table-tennis': 300,
    }[sportType] || 500;
    
    const amount = basePrice * players;
    
    setBookingDetails({
      sport: sportName,
      date: new Date(selectedDate).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      timeSlot: selectedSlot,
      players,
      amount
    });
    
    setShowConfirmation(true);
  };
  
  const handleConfirmBooking = (formData) => {
    // Here you would typically send this data to your backend
    console.log('Booking confirmed:', { ...bookingDetails, ...formData });
    
    // Show success message
    alert(`Booking confirmed! A confirmation has been sent to ${formData.email}`);
    
    // Reset and close
    setShowConfirmation(false);
    setSelectedSlot(null);
    setSelectedDate("");
    setPlayers(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
       {/* Header */}
<header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10">
  <div className="max-w-5xl mx-auto px-16 py-4 flex items-center">
    <button
      onClick={() => navigate(-1)}
      className="p-2 rounded-full bg-white/10 hover:bg-white/10 mr-4 transition"
    >
      <FiArrowLeft className="w-5 h-5" />
    </button>

    <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
      Book {sportName} Slot
    </h1>
  </div>
</header>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Choose Date */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Choose Date</h2>
              <div className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-lg shadow-sm">
                <FiCalendar className="text-indigo-500 text-lg" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-transparent outline-none text-gray-700 font-medium cursor-pointer"
                />
              </div>
            </div>

            {/* Available Time Slots */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FiClock className="text-indigo-500" /> Available Time Slots
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && setSelectedSlot(slot.time)}
                    disabled={!slot.available}
                    className={`relative px-4 py-3 rounded-lg border text-xs text-center  transition-all duration-200 ${selectedSlot === slot.time
                      ? `border-transparent bg-gradient-to-r ${gradientClass} text-white shadow-md`
                      : slot.available
                        ? "border-gray-200 hover:border-indigo-300 hover:shadow-sm bg-gray-50 text-gray-700"
                        : "border-gray-100 bg-gray-100 cursor-not-allowed opacity-60 text-gray-400"
                      }`}
                  >
                    {selectedSlot === slot.time && (
                      <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-[3px]">
                        <FiCheck className="text-[10px]" />
                      </div>
                    )}
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section (Booking Summary) */}
          <div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden sticky top-8 border border-gray-100">
              <div className="p-6 border-b bg-indigo-50">
                <h2 className="text-xl font-semibold text-gray-800">
                  Booking Summary
                </h2>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="p-3 rounded-lg bg-indigo-100 mr-4">
                    <FiUsers className="text-2xl text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-700">Number of Players</h3>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => setPlayers((p) => Math.max(1, p - 1))}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                      >
                        -
                      </button>
                      <span className="mx-4 text-lg font-medium w-8 text-center">
                        {players}
                      </span>
                      <button
                        onClick={() => setPlayers((p) => p + 1)}
                        className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">
                      {selectedDate || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Slot:</span>
                    <span className="font-medium">
                      {selectedSlot || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium">
                      ${players * 10}{" "}
                      <span className="text-sm text-gray-500">($10/player)</span>
                    </span>
                  </div>
                  <div className="border-t border-dashed my-2"></div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span
                      className={`${gradientClass} bg-clip-text text-transparent`}
                    >
                      ${players * 10}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  disabled={!selectedSlot || !selectedDate}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${selectedSlot && selectedDate
                    ? `bg-gradient-to-r ${gradientClass} hover:shadow-lg transform hover:-translate-y-0.5`
                    : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                  {selectedSlot && selectedDate
                    ? "Confirm Booking"
                    : "Select Date & Time"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Confirmation Modal */}
      <BookingConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmBooking}
        bookingDetails={bookingDetails}
      />
    </div>
  );
};

export default BookingSlot;
