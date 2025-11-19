import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiCalendar, FiClock, FiUser, FiMail, FiPhone, FiCreditCard, FiHome, FiFileText, FiArrowLeft } from 'react-icons/fi';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const bookingData = location.state;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        navigate('/payment-success');
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="text-green-500 text-6xl mb-4 flex justify-center">
            <FiCheckCircle />
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-gray-600">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
      >
        <FiArrowLeft className="mr-2" /> Back to Payment
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Confirm Your Booking</h1>
          <p className="text-blue-100">Please review your booking details before proceeding to payment</p>
        </div>

        <div className="p-6">
          {/* Booking Summary */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiCalendar className="mr-2" /> Booking Summary
            </h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="w-32 text-gray-600">Sport:</span>
                <span className="font-medium">{bookingData.sport}</span>
              </p>
              <p className="flex items-center">
                <span className="w-32 text-gray-600">Date:</span>
                <span>{new Date(bookingData.date).toLocaleDateString()}</span>
              </p>
              <p className="flex items-center">
                <span className="w-32 text-gray-600">Time Slot:</span>
                <span>{bookingData.timeSlot}</span>
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiUser className="mr-2" /> Personal Information
            </h2>
            <div className="space-y-2">
              <p><span className="text-gray-600">Full Name:</span> {bookingData.fullName}</p>
              <p><span className="text-gray-600">Father's Name:</span> {bookingData.fatherName}</p>
              <p><span className="text-gray-600">Email:</span> {bookingData.email}</p>
              <p><span className="text-gray-600">Phone:</span> {bookingData.phone}</p>
              <p><span className="text-gray-600">Aadhar:</span> {bookingData.aadhar}</p>
              <p><span className="text-gray-600">Address:</span> {bookingData.address}</p>
              {bookingData.notes && (
                <p><span className="text-gray-600">Notes:</span> {bookingData.notes}</p>
              )}
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="text-gray-600">Booking Amount:</span>
                <span className="font-medium">₹500.00</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">GST (18%):</span>
                <span>₹90.00</span>
              </p>
              <div className="border-t border-gray-200 my-2"></div>
              <p className="flex justify-between text-lg font-semibold">
                <span>Total Amount:</span>
                <span className="text-blue-600">₹590.00</span>
              </p>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the Terms & Conditions and Privacy Policy. I understand that this booking is subject to availability and cancellation policy.
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={isProcessing}
            >
              Back
            </button>
            <button
              type="button"
              onClick={handlePayment}
              className={`px-8 py-3 rounded-md text-white font-medium flex items-center justify-center ${
                isProcessing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={isProcessing}
            >
              {isProcessing ? (
                'Processing...'
              ) : (
                <>
                  Proceed to Pay ₹590.00
                  <FiCheckCircle className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
