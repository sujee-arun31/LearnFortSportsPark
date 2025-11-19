import React from "react";
import {
    FiArrowLeft,
    FiUser,
    FiMail,
    FiPhone,
    FiHome,
    FiMapPin,
    FiCreditCard,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProfilePage = () => {
    const navigate = useNavigate();

    const user = {
        name: "John Doe",
        fatherName: "Michael Doe",
        email: "john.doe@example.com",
        mobile: "9876543210",
        nativePlace: "Mumbai",
        aadhaar: "123456789012",
        address: "123, Main Street, Mumbai, Maharashtra",
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-indigo-50 to-white text-gray-800 font-['Inter',sans-serif]">
              {/* Header */} <header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10"> <div className="max-w-5xl mx-auto px-4 py-4 flex items-center"> <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 hover:bg-white/10 mr-4 transition" > <FiArrowLeft className="w-5 h-5" /> </button> <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">Manage Profile</h1> </div> </header>
               
            {/* Main Section */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl border border-blue-100 w-full max-w-2xl p-6 sm:p-8"
                >
                    {/* Avatar */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 border-4 border-blue-300 rounded-full shadow-md flex items-center justify-center">
                            <FiUser className="w-12 h-12 text-blue-700" />
                        </div>
                        <h2 className="mt-3 text-lg font-semibold text-blue-800">
                            {user.name}
                        </h2>
                        <p className="text-xs text-gray-500">Admin - LearnFort Sports Park</p>
                    </div>

                    {/* Profile Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {[
                            {
                                label: "Name",
                                value: user.name,
                                icon: <FiUser className="text-blue-700" />,
                            },
                            {
                                label: "Father's Name",
                                value: user.fatherName,
                                icon: <FiUser className="text-blue-700" />,
                            },
                            {
                                label: "Mobile Number",
                                value: user.mobile,
                                icon: <FiPhone className="text-blue-700" />,
                            },
                            {
                                label: "Email",
                                value: user.email,
                                icon: <FiMail className="text-blue-700" />,
                            },
                            {
                                label: "Native Place",
                                value: user.nativePlace,
                                icon: <FiMapPin className="text-blue-700" />,
                            },
                            {
                                label: "Aadhaar Number",
                                value: user.aadhaar,
                                icon: <FiCreditCard className="text-blue-700" />,
                            },
                        ].map((field, index) => (
                            <div
                                key={index}
                                className="flex items-start bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-lg p-3 shadow-sm hover:shadow-md transition"
                            >
                                <div className="mt-1 mr-3 text-blue-600">{field.icon}</div>
                                <div className="flex flex-col text-left">
                                    <span className="text-xs text-gray-500 font-medium tracking-wide">
                                        {field.label}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-800 mt-1">
                                        {field.value}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Address field spans full width */}
                        <div className="sm:col-span-2 flex items-start bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-lg p-3 shadow-sm hover:shadow-md transition text-left">
                            <div className="mt-1 mr-3 text-blue-600">
                                <FiHome className="text-blue-700" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-gray-500 font-medium tracking-wide">
                                    Address
                                </span>
                                <span className="text-sm font-semibold text-gray-800 mt-1">
                                    {user.address}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Edit Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => alert("Edit Profile clicked")}
                            className="px-6 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-medium rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            Edit Profile
                        </button>
                    </div>
                </motion.div>
            </main>

        </div>
    );
};

export default ProfilePage;
