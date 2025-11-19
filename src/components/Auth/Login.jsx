import React from "react";
import { useNavigate } from "react-router-dom";
import LearnFortLogo from "../../images/LearnFort.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: on successful login, go to home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-center mb-4">
            <img src={LearnFortLogo} className="w-16 h-16" alt="LearnFort" />
          </div>
          <h1 className="text-2xl font-semibold text-center text-blue-700 mb-1">Welcome Back 👋</h1>
          <p className="text-center text-gray-500 mb-6">Login to continue to SportsPark</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <button type="submit" className="w-full bg-blue-700 text-white rounded-lg py-3 font-medium hover:bg-blue-800">Login</button>
          </form>
        </div>
        <div className="text-center mt-3 text-sm space-y-1">
          <div>
            <span className="text-gray-600 mr-1">Don't have an account?</span>
            <button onClick={() => navigate("/register") } className="text-blue-700 font-medium hover:underline">Register</button>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <button onClick={() => navigate("/register?role=user") } className="text-blue-700 hover:underline">Register as User</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => navigate("/register?role=admin") } className="text-blue-700 hover:underline">Register as Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
