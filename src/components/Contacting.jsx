import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiPhone, FiMail, FiFileText, FiChevronDown, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Contacting = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    mobileNumber: '',
    email: '',
    native: '',
    contactType: 'Select Contact Type',
    notes: ''
  });

  const contactTypes = [
    'General Inquiry',
    'Booking Assistance',
    'Feedback/Suggestions',
    'Partnership',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white text-gray-800 font-['Inter',sans-serif] pb-12 pt-8">
      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
<header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
    <button
      onClick={handleBack}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 mr-4 transition"
      aria-label="Go back"
    >
      <FiArrowLeft className="w-5 h-5" />
    </button>

    <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">Contact Us</h1>
  </div>
</header>


        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6 overflow-y-auto flex-1"
        >
          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            {/* Father's Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Father’s Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your father's name"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your mobile number"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Email (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
            </div>

            {/* Native */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Native
              </label>
              <input
                type="text"
                name="native"
                value={formData.native}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your native place"
              />
            </div>

            {/* Contact Type */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Contact Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <span
                    className={
                      formData.contactType === 'Select Contact Type'
                        ? 'text-gray-400'
                        : 'text-gray-800'
                    }
                  >
                    {formData.contactType}
                  </span>
                  <FiChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-left">
                    {contactTypes.map((type, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            contactType: type
                          }));
                          setIsDropdownOpen(false);
                        }}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Notes (Full width) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Write your notes</label>
            <div className="relative">
              <div className="absolute top-3 left-3">
                <FiFileText className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <FiSend className="h-5 w-5" />
              Submit Enquiry
            </button>

          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contacting;
