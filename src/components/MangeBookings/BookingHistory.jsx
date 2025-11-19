import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FiArrowLeft,
    FiClock,
    FiCalendar,
    FiCheckCircle,
    FiX,
} from "react-icons/fi";
import {
    GiSoccerBall,
    GiCricketBat,
    GiTennisRacket,
    GiBasketballBall,
    GiShuttlecock,
} from "react-icons/gi";

const BookingsPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("upcoming");
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showReceipt, setShowReceipt] = useState(false);
    const [pendingBooking, setPendingBooking] = useState(null);
    const [showPendingPayment, setShowPendingPayment] = useState(false);

    // Game icons mapping
    const gameIcons = {
        Football: <GiSoccerBall className="w-7 h-7 text-blue-700" />,
        Cricket: <GiCricketBat className="w-7 h-7 text-green-700" />,
        Tennis: <GiTennisRacket className="w-7 h-7 text-yellow-600" />,
        Basketball: <GiBasketballBall className="w-7 h-7 text-orange-600" />,
        Badminton: <GiShuttlecock className="w-7 h-7 text-indigo-700" />,
    };

    const bookingsData = {
        upcoming: [
            {
                id: 1,
                game: "Football",
                date: "Nov 10, 2025",
                time: "10:00 AM - 11:00 AM",
                duration: "1 hour",
                status: "Pending",
            },
            {
                id: 2,
                game: "Tennis",
                date: "Nov 12, 2025",
                time: "6:30 PM - 7:30 PM",
                duration: "1 hour",
                status: "Confirmed",
            },
        ],
        live: [
            {
                id: 3,
                game: "Badminton",
                date: "Nov 5, 2025",
                time: "10:00 AM - 11:00 AM",
                duration: "1 hour",
                status: "Ongoing",
            },
        ],
        completed: [
            {
                id: 4,
                game: "Cricket",
                date: "Nov 1, 2025",
                time: "4:00 PM - 6:00 PM",
                duration: "2 hours",
                status: "Paid",
                amount: "₹500",
                customer: {
                    name: "John Doe",
                    email: "john.doe@gmail.com",
                    phone: "+91 9876543210",
                },
                bookingId: "SP-2025-CR-004",
                paymentId: "PAY-984735",
            },
            {
                id: 5,
                game: "Basketball",
                date: "Oct 28, 2025",
                time: "5:00 PM - 6:00 PM",
                duration: "1 hour",
                status: "Pending",
            },
        ],
    };

    const getBookings = () => bookingsData[activeTab] || [];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white text-gray-800 font-['Inter',sans-serif]">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/10 mr-4 transition"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
                        Manage Bookings
                    </h1>
                </div>
            </header>

            {/* Tabs */}
            <div className="max-w-5xl mx-auto mt-8 px-4">
                <div className="flex justify-center space-x-3 bg-white p-2 rounded-full shadow-md border border-blue-100">
                    {["upcoming", "live", "completed"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${activeTab === tab
                                ? "bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md"
                                : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bookings List */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl mx-auto px-4 mt-8"
            >
                <h2 className="text-lg font-semibold text-blue-700 mb-5">
                    Your Recent{" "}
                    {activeTab === "completed"
                        ? "Completed"
                        : activeTab === "live"
                            ? "Live"
                            : "Upcoming"}{" "}
                    Bookings
                </h2>

                <div className="grid grid-cols-1 gap-5">
                    {getBookings().length > 0 ? (
                        getBookings().map((booking) => (
                            <motion.div
                                key={booking.id}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    if (booking.status === "Paid") {
                                        setSelectedBooking(booking);
                                    } else if (booking.status === "Pending") {
                                        setPendingBooking(booking);
                                    }
                                }}

                                className={`cursor-pointer bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition flex items-center justify-between ${booking.status === "Paid" ? "hover:bg-blue-50" : ""
                                    }`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full shadow-inner">
                                        {gameIcons[booking.game] || (
                                            <FiCalendar className="w-6 h-6 text-blue-600" />
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="flex items-center space-x-2 text-sm text-gray-600 mt-1 font-semibold">
                                            {booking.game}
                                        </h3>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                                            <FiCalendar className="w-4 h-4 text-blue-500" />
                                            <span>{booking.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                                            <FiClock className="w-4 h-4 text-indigo-500" />
                                            <span>
                                                {booking.time}{" "}
                                                <span className="text-gray-500">
                                                    ({booking.duration})
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span
                                        className={`px-4 py-1 text-xs font-semibold rounded-full ${booking.status === "Paid"
                                            ? "bg-green-100 text-green-700"
                                            : booking.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : booking.status === "Ongoing"
                                                    ? "bg-orange-100 text-orange-700"
                                                    : "bg-blue-100 text-blue-700"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-10">
                            No {activeTab} bookings found.
                        </p>
                    )}
                </div>
            </motion.div>

            {/* Payment Success Modal */}
            {selectedBooking && !showReceipt && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 relative">
                        <button
                            onClick={() => setSelectedBooking(null)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        >
                            <FiX className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <FiCheckCircle className="w-12 h-12 text-green-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Payment Successful!
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Your payment of{" "}
                                <span className="font-semibold">
                                    {selectedBooking.amount}
                                </span>{" "}
                                for {selectedBooking.game} booking was successful.
                            </p>
                            <button
                                onClick={() => setShowReceipt(true)}
                                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                            >
                                View Receipt
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Receipt Modal */}
            {selectedBooking && showReceipt && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        id="receipt-content"
                        className="bg-gradient-to-b from-white via-blue-50 to-white rounded-2xl shadow-2xl 
                 w-full max-w-xs sm:max-w-sm p-4 relative border border-blue-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setSelectedBooking(null);
                                setShowReceipt(false);
                            }}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                            <FiX className="w-4 h-4" />
                        </button>

                        {/* Header */}
                        <div className="text-center mb-3">
                            <div className="flex items-center justify-center mb-1">
                                <GiSoccerBall className="w-6 h-6 text-blue-700" />
                            </div>
                            <h3 className="text-base font-bold text-blue-800">SportsPark</h3>
                            <p className="text-[10px] text-gray-500">Payment Receipt</p>
                            <div className="mt-1 h-0.5 w-8 bg-blue-600 mx-auto rounded-full"></div>
                        </div>

                        {/* Receipt Body */}
                        <div className="space-y-2 text-[12px] text-gray-700">
                            {/* Customer Info */}
                            <div className="bg-white rounded-lg shadow-inner p-2 border border-blue-100">
                                <h4 className="font-semibold text-gray-900 mb-1 border-b pb-0.5 text-[11px]">
                                    Customer Details
                                </h4>
                                <div className="space-y-0.5">
                                    <p><b>Name:</b> {selectedBooking.customer.name}</p>
                                    <p><b>Email:</b> {selectedBooking.customer.email}</p>
                                    <p><b>Phone:</b> {selectedBooking.customer.phone}</p>
                                </div>
                            </div>

                            {/* Booking Info */}
                            <div className="bg-white rounded-lg shadow-inner p-2 border border-blue-100">
                                <h4 className="font-semibold text-gray-900 mb-1 border-b pb-0.5 text-[11px]">
                                    Booking Details
                                </h4>
                                <div className="space-y-0.5">
                                    <p><b>Game:</b> {selectedBooking.game}</p>
                                    <p><b>Date:</b> {selectedBooking.date}</p>
                                    <p><b>Time:</b> {selectedBooking.time}</p>
                                    <p><b>Booking ID:</b> {selectedBooking.bookingId}</p>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="bg-white rounded-lg shadow-inner p-2 border border-blue-100">
                                <h4 className="font-semibold text-gray-900 mb-1 border-b pb-0.5 text-[11px]">
                                    Payment Details
                                </h4>
                                <div className="space-y-0.5">
                                    <p><b>Payment ID:</b> {selectedBooking.paymentId}</p>
                                    <p><b>Amount Paid:</b> {selectedBooking.amount}</p>
                                    <p>
                                        <b>Status:</b>{" "}
                                        <span className="text-green-600 font-medium">Successful</span>
                                    </p>
                                    <p><b>Date:</b> {selectedBooking.date}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-3 text-center border-t pt-2">
                            <p className="text-[10px] text-gray-600 leading-snug">
                                🎉 <b>Thank You</b> for choosing <b>SportsPark!</b><br />
                                Need help? Email{" "}
                                <a href="mailto:support@sportspark.com" className="text-blue-600 underline">
                                    support@sportspark.com
                                </a>
                            </p>

                            <button
                                onClick={() => {
                                    const receipt = document.getElementById("receipt-content");
                                    import("html2canvas").then(({ default: html2canvas }) => {
                                        import("jspdf").then(({ default: jsPDF }) => {
                                            html2canvas(receipt).then((canvas) => {
                                                const imgData = canvas.toDataURL("image/png");
                                                const pdf = new jsPDF("p", "mm", "a4");
                                                const imgWidth = 150;
                                                const pageHeight = 295;
                                                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                                                pdf.addImage(imgData, "PNG", 30, 30, imgWidth, imgHeight);
                                                pdf.save("SportsPark_Receipt.pdf");
                                            });
                                        });
                                    });
                                }}
                                className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                     px-4 py-1 rounded-full text-[12px] shadow 
                     hover:from-blue-700 hover:to-indigo-700 transition"
                            >
                                Download Receipt
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Pending Payment Modal */}
            {pendingBooking && !showPendingPayment && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 relative">
                        <button
                            onClick={() => setPendingBooking(null)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        >
                            <FiX className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <FiClock className="w-12 h-12 text-yellow-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Payment Pending
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Your payment of{" "}
                                <span className="font-semibold text-yellow-700">
                                    ₹500
                                </span>{" "}
                                for {pendingBooking.game} booking is pending.
                            </p>
                            <button
                                onClick={() => setShowPendingPayment(true)}
                                className="bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Pending Payment Details Modal */}
            {pendingBooking && showPendingPayment && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        id="pending-receipt"
                        className="bg-gradient-to-b from-white via-yellow-50 to-white rounded-2xl shadow-2xl 
      w-full max-w-xs sm:max-w-sm p-4 relative border border-yellow-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setPendingBooking(null);
                                setShowPendingPayment(false);
                            }}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                            <FiX className="w-4 h-4" />
                        </button>

                        {/* Header */}
                        <div className="text-center mb-3">
                            <div className="flex items-center justify-center mb-1">
                                {gameIcons[pendingBooking.game] || (
                                    <FiCalendar className="w-6 h-6 text-yellow-600" />
                                )}
                            </div>
                            <h3 className="text-base font-bold text-yellow-700">SportsPark</h3>
                            <p className="text-[10px] text-gray-500">Pending Payment Details</p>
                            <div className="mt-1 h-0.5 w-8 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        {/* Receipt Body */}
                        <div className="space-y-2 text-[12px] text-gray-700">
                            {/* Customer Info */}
                            <div className="bg-white rounded-lg shadow-inner p-2 border border-yellow-100">
                                <h4 className="font-semibold text-gray-900 mb-1 border-b pb-0.5 text-[11px]">
                                    Customer Details
                                </h4>
                                <div className="space-y-0.5">
                                    <p><b>Name:</b> John Doe</p>
                                    <p><b>Email:</b> john.doe@gmail.com</p>
                                    <p><b>Phone:</b> +91 9876543210</p>
                                </div>
                            </div>

                            {/* Booking Info */}
                            <div className="bg-white rounded-lg shadow-inner p-2 border border-yellow-100">
                                <h4 className="font-semibold text-gray-900 mb-1 border-b pb-0.5 text-[11px]">
                                    Booking Details
                                </h4>
                                <div className="space-y-0.5">
                                    <p><b>Game:</b> {pendingBooking.game}</p>
                                    <p><b>Date:</b> {pendingBooking.date}</p>
                                    <p><b>Time:</b> {pendingBooking.time}</p>
                                    <p><b>Duration:</b> {pendingBooking.duration}</p>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="bg-white rounded-lg shadow-inner p-2 border border-yellow-100">
                                <h4 className="font-semibold text-gray-900 mb-1 border-b pb-0.5 text-[11px]">
                                    Payment Details
                                </h4>
                                <div className="space-y-0.5">
                                    <p><b>Due Amount:</b> ₹500</p>
                                    <p><b>Status:</b> <span className="text-yellow-600 font-medium">Pending</span></p>
                                    <p><b>Date:</b> {pendingBooking.date}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-3 text-center border-t pt-2">
                            <p className="text-[10px] text-gray-600 leading-snug">
                                💛 <b>Thank You</b> for choosing <b>SportsPark!</b><br />
                                For support, contact us at{" "}
                                <a href="mailto:support@sportspark.com" className="text-yellow-600 underline">
                                    support@sportspark.com
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}

          
        </div>
    );
};

export default BookingsPage;
