import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUploadCloud, FiUser, FiMapPin, FiFolderPlus, FiInfo, FiDollarSign, FiHash, FiCheck, FiX } from "react-icons/fi";

const AddSport = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(true);
    const [sportImage, setSportImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);

    const handleSportImageChange = (e) => {
        setSportImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleBannerImageChange = (e) => {
        setBannerImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
                        Add Sports
                    </h1>
                </div>
            </header>
            {/* Form Card */}
            <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl  mb-12 overflow-hidden border border-gray-100">
                {/* Form Header */}
                <div className="px-8 pt-6 pb-4 border-b border-gray-100">
                    <div className="px-8 pt-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            {/* Left Side: Title + Subtitle */}
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                    <FiUser className="h-6 w-6" />

                                </div>
                                <div className="ml-4">
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Sport Information
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Fill in the details below to add a new sport
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Status Toggle */}
                            <div className="flex flex-col items-end space-y-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>
                                <div className="flex items-center">
                                    <div
                                        onClick={() => setStatus(!status)}
                                        className={`relative inline-flex items-center h-8 rounded-full w-16 cursor-pointer transition-colors duration-200 ${status ? "bg-green-500" : "bg-gray-300"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block w-7 h-7 transform transition-transform duration-200 rounded-full bg-white shadow-md flex items-center justify-center ${status ? "translate-x-9" : "translate-x-1"
                                                }`}
                                        >
                                            {status ? (
                                                <FiCheck className="text-green-500" size={18} />
                                            ) : (
                                                <FiX className="text-gray-500" size={18} />
                                            )}
                                        </span>
                                    </div>
                                    <span
                                        className={`ml-3 text-sm font-medium ${status ? "text-green-600" : "text-gray-600"
                                            }`}
                                    >
                                        {status ? "Active" : "Inactive"}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {status
                                        ? "This sport will be visible to users"
                                        : "This sport will be hidden from users"}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <form className="p-8 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Sport Name */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 flex items-center">
                                <span>Sport Name</span>
                                <span className="text-red-500 ml-1">*</span>
                                <FiInfo className="ml-2 text-gray-400" size={14} />
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="e.g., Football, Cricket"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiFolderPlus className="h-5 w-5 text-gray-400" />

                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Enter the name of the sport</p>
                        </div>

                        {/* Ground Name */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 flex items-center">
                                <span>Ground Name</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g., Main Field, Court 1"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiMapPin className="h-5 w-5 text-gray-400" />

                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Name or number of the ground/field</p>
                        </div>

                        {/* Actual Price per Slot */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 flex items-center">
                                <span>Actual Price per Slot</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiDollarSign className="text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 2000"
                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Standard price before any discounts</p>
                        </div>

                        {/* Final Price per Slot */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 flex items-center">
                                <span>Discounted Price per Slot</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiDollarSign className="text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 1500"
                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Special price after discount (if any)</p>
                        </div>

                        {/* Half Ground */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 flex items-center">
                                <span>Half Ground Slots</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiHash className="text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 4"
                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Number of slots for half ground</p>
                        </div>

                        {/* Full Ground */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 flex items-center">
                                <span>Full Ground Slots</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiHash className="text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 8"
                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Number of slots for full ground</p>
                        </div>
                    </div>

                    {/* About Sport */}
                    <div className="mt-2 mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <span>About Sport</span>
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                            <textarea
                                rows="4"
                                required
                                placeholder="Write a detailed description about this sport, including any special rules or requirements..."
                                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                            ></textarea>
                            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                                <span className="font-medium">0</span>/500 characters
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Status Toggle */}


                        {/* Sport Image */}
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Sport Image
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${sportImage ? 'border-green-200 bg-green-50' : 'border-gray-300 hover:border-blue-400 bg-gray-50'
                                }`}>
                                <label className="cursor-pointer flex flex-col items-center">
                                    <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                                        <FiUploadCloud className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-700 mb-1">
                                            {sportImage ? 'Image Uploaded' : 'Upload Sport Image'}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-2">
                                            {sportImage ? 'Click to change' : 'PNG, JPG, JPEG up to 5MB'}
                                        </p>
                                        <p className="text-xs text-gray-400 italic">
                                            Recommended sizes:
                                            <br />
                                            <span className="font-medium text-gray-500">
                                                320×120 (Sports Image) • 1200×400 (Website)
                                            </span>
                                        </p>
                                    </div>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleSportImageChange}
                                        className="hidden"
                                    />
                                    {sportImage ? (
                                        <div className="mt-4">
                                            <div className="relative inline-block">
                                                <img
                                                    src={sportImage}
                                                    alt="Sport"
                                                    className="h-24 w-24 object-cover rounded-lg shadow-sm border-2 border-white"
                                                />
                                                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                                                    <FiCheck size={12} />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                        >
                                            Select File
                                        </button>
                                    )}
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Banner Image */}
                    <div className="space-y-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Banner Image
                            <span className="text-blue-500 ml-1">(Optional)</span>
                        </label>
                        <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${bannerImage ? 'border-purple-200 bg-purple-50' : 'border-gray-300 hover:border-blue-400 bg-gray-50'
                            }`}>
                            <label className="cursor-pointer flex flex-col items-center">
                                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mb-3">
                                    <FiUploadCloud className="w-6 h-6" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-700 mb-1">
                                        {bannerImage ? 'Banner Uploaded' : 'Upload Banner Image'}
                                    </p>
                                    <p className="text-xs text-gray-500 mb-3">
                                        {bannerImage ? 'Click to change' : 'Recommended size: 1200x400px, JPG or PNG up to 2MB'}
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleBannerImageChange}
                                    className="hidden"
                                />
                                {bannerImage ? (
                                    <div className="mt-4 w-full">
                                        <div className="relative inline-block max-w-full">
                                            <img
                                                src={bannerImage}
                                                alt="Banner Preview"
                                                className="h-32 w-full object-cover rounded-lg shadow-sm border-2 border-white max-w-2xl"
                                            />
                                            <div className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-1">
                                                <FiCheck size={12} />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        className="mt-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                    >
                                        Select Banner
                                    </button>
                                )}
                            </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            A banner image will be displayed at the top of the sport's page
                        </p>
                    </div>

                    {/* Form Actions */}
                    <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="w-full sm:w-auto mb-3 sm:mb-0 px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            Cancel
                        </button>
                        <div className="flex space-x-3 w-full sm:w-auto">

                            <button
                                type="submit"
                                className="w-1/2 sm:w-auto px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-0.5"
                            >
                                Add Sport
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSport;
