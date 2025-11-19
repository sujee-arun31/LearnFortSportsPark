// src/components/Admin/Settings/ChangePassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiShield,
} from "react-icons/fi";
import LearnFortLogo from "../../../images/LearnFort.png";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating password:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      <div className="relative w-full max-w-md bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900 transition-all"
        >
          <FiArrowLeft className="mr-2" /> <span className="text-sm">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mt-6 mb-8">
          <div className="flex justify-center mb-4">
            <img
              src={LearnFortLogo}
              alt="LearnFort Logo"
              className="w-20 h-20 object-contain drop-shadow-md"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 flex justify-center items-center gap-2">
            <FiShield className="text-blue-600" /> Change Password
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Keep your account safe with a strong password 
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Current Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type={show.current ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShow((prev) => ({ ...prev, current: !prev.current }))}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {show.current ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
              New Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type={show.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShow((prev) => ({ ...prev, new: !prev.new }))}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {show.new ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 8 characters with numbers and symbols.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Confirm New Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type={show.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShow((prev) => ({ ...prev, confirm: !prev.confirm }))
                }
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {show.confirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg font-medium hover:opacity-90 shadow-md transition-all"
          >
            Update Password
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Tip: Use a mix of uppercase, lowercase, and special characters 
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
