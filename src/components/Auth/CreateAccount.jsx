import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CreateAccount = () => {
  const [activeTab, setActiveTab] = useState("USER");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const role = params.get("role");
    if (role === "admin") setActiveTab("ADMIN");
    else if (role === "user") setActiveTab("USER");
  }, [location.search]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder: after registration go to login
    navigate("/login");
  };

  const Field = ({ placeholder, type = "text" }) => (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  );

  const Form = () => (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field placeholder="Full Name" />
      <Field placeholder="Father Name" />
      <div className="grid grid-cols-1 gap-3">
        <Field placeholder="Mobile Number" type="tel" />
      </div>
      <Field placeholder="Email Address" type="email" />
      <Field placeholder="Native Place" />
      <Field placeholder="Aadhar Number" />
      <Field placeholder="Address" />
      <Field placeholder="Password" type="password" />
      <Field placeholder="Confirm Password" type="password" />
      <button type="submit" className="w-full bg-blue-700 text-white rounded-lg py-3 font-medium hover:bg-blue-800">Register Now</button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-semibold text-center text-blue-700 mb-1">Create Account</h1>
{/* Tabs */}
<div className="flex justify-center space-x-6 mt-3 mb-6 border-b">
  {(["USER", "ADMIN"]).map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`
        px-4 py-2 -mb-px border-b-2 text-sm font-semibold rounded-t-md
        transition-all
        ${activeTab === tab 
          ? "border-blue-700 text-blue-700 bg-blue-50" 
          : "border-transparent text-gray-600 bg-transparent hover:bg-gray-100"
        }
        focus:outline-none focus:ring-0 focus:border-transparent
      `}
    >
      {tab}
    </button>
  ))}
</div>


          {/* Form content changes per tab if needed later */}
          <Form />

          <div className="text-center mt-4 text-sm">
            <button onClick={() => navigate("/login")} className="text-blue-700 hover:underline">Back to Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
