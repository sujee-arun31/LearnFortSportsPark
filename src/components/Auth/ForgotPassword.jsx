import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, Lock, RefreshCw } from "lucide-react";
import LearnFortLogo from "../../images/LearnFort.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showResetFields, setShowResetFields] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    resetToken: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendLink = (e) => {
    e.preventDefault();
    if (!formData.emailOrPhone) {
      alert("Please enter your registered email or mobile number.");
      return;
    }
    // TODO: Call API to send reset token
    setShowResetFields(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!formData.resetToken || !formData.newPassword) {
      alert("Please enter the reset token and new password.");
      return;
    }
    // TODO: Call API to reset password here
    alert("Password updated successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-md p-6">
          {/* Logo Section */}
          <div className="flex justify-center mb-4">
            <img src={LearnFortLogo} className="w-16 h-16" alt="LearnFort" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-center text-blue-700 mb-1">
            {showResetFields ? "Reset Your Password" : "Forgot Password"}
          </h1>
          <p className="text-center text-gray-500 mb-6">
            {showResetFields
              ? "Enter your reset token and new password to continue."
              : "Enter your registered mobile number or email to reset your password."}
          </p>

          {/* Step 1: Enter Email or Phone */}
          {!showResetFields ? (
            <form onSubmit={handleSendLink} className="space-y-4">
              <input
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                placeholder="Enter Email or Mobile Number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white rounded-lg py-3 font-medium hover:bg-blue-800 transition"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            /* Step 2: Reset Password UI */
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <RefreshCw className="h-8 w-8 text-blue-700" />
                </div>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg p-3">
                <KeyRound className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="resetToken"
                  value={formData.resetToken}
                  onChange={handleChange}
                  placeholder="Reset Token"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg p-3">
                <Lock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white rounded-lg py-3 font-medium hover:bg-blue-800 transition"
              >
                Update Password
              </button>
            </form>
          )}

          {/* Back to Login */}
          <div className="text-center mt-4 text-sm">
            <button
              onClick={() => navigate("/login")}
              className="text-blue-700 hover:underline"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
