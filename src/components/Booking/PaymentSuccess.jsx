import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiHome } from 'react-icons/fi';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <div className="text-green-500 text-7xl mb-6 flex justify-center">
          <FiCheckCircle />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Your booking has been confirmed. We've sent a confirmation email with all the details.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-8 text-left">
          <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Check your email for the booking confirmation</li>
            <li>Bring your ID proof when you come for the game</li>
            <li>Please arrive 15 minutes before your scheduled time</li>
          </ul>
        </div>
        
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiHome className="mr-2" />
          Back to Home
        </button>
        
        <p className="mt-4 text-sm text-gray-500">
          You'll be redirected to home page in 5 seconds...
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
