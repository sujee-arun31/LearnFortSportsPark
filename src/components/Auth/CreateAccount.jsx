import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CreateAccount = () => {
  const [activeTab, setActiveTab] = useState("USER");
  const [toast, setToast] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const role = params.get("role");
    if (role === "admin") setActiveTab("ADMIN");
    else if (role === "user") setActiveTab("USER");
  }, []);
  

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = (form.name.value || "").trim();
    const father_name = (form.father_name.value || "").trim();
    const mobile = (form.mobile.value || "").trim();
    const email = (form.email.value || "").trim();
    const native_place = (form.native_place.value || "").trim();
    const aadhar_number = (form.aadhar_number.value || "").trim();
    const address = (form.address.value || "").trim();
    const password = (form.password.value || "").trim();
    const confirmPassword = (form.confirmPassword.value || "").trim();

    if (!name) {
      setToast({ message: "Please enter your full name", type: "error" });
      return;
    }

    if (!father_name) {
      setToast({ message: "Please enter father name", type: "error" });
      return;
    }

    if (!mobile) {
      setToast({ message: "Please enter mobile number", type: "error" });
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setToast({ message: "Mobile number must be 10 digits", type: "error" });
      return;
    }

    if (!email) {
      setToast({ message: "Please enter email address", type: "error" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setToast({ message: "Please enter a valid email address", type: "error" });
      return;
    }

    if (!native_place) {
      setToast({ message: "Please enter native place", type: "error" });
      return;
    }

    if (!aadhar_number) {
      setToast({ message: "Please enter Aadhar number", type: "error" });
      return;
    }

    if (!address) {
      setToast({ message: "Please enter address", type: "error" });
      return;
    }

    if (!password) {
      setToast({ message: "Invalid password", type: "error" });
      return;
    }

    if (password.length < 6) {
      setToast({ message: "Password must be at least 6 characters", type: "error" });
      return;
    }

    if (!confirmPassword) {
      setToast({ message: "Please confirm your password", type: "error" });
      return;
    }

    if (password !== confirmPassword) {
      setToast({ message: "Password and Confirm Password must match", type: "error" });
      return;
    }

    const body = {
      name,
      father_name,
      mobile,
      email,
      native_place,
      aadhar_number,
      address,
      country_code: "in",
      mobile_code: "91",
      password,
    };

    const url =
      activeTab === "ADMIN"
        ? "https://learn-fornt-app.vercel.app/v1/admin/register"
        : "https://learn-fornt-app.vercel.app/v1/user/register";

    setIsLoading(true);
    setToast({ message: "", type: "" });

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorText = await res.text();
        let message = "Registration failed";
        if (errorText) {
          try {
            const parsed = JSON.parse(errorText);
            message = parsed.message || parsed.error || message;
          } catch {
            message = errorText;
          }
        }
        throw new Error(message);
      }

      setToast({ message: "Registered successfully", type: "success" });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setToast({ message: err.message || "Registration failed", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const Field = ({ placeholder, type = "text", name }) => (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  );

  const Form = () => (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field
        placeholder="Full Name"
        name="name"
      />
      <Field
        placeholder="Father Name"
        name="father_name"
      />
      <div className="grid grid-cols-1 gap-3">
        <Field
          placeholder="Mobile Number"
          type="tel"
          name="mobile"
        />
      </div>
      <Field
        placeholder="Email Address"
        type="email"
        name="email"
      />
      <Field
        placeholder="Native Place"
        name="native_place"
      />
      <Field
        placeholder="Aadhar Number"
        name="aadhar_number"
      />
      <Field
        placeholder="Address"
        name="address"
      />
      <Field
        placeholder="Password"
        type="password"
        name="password"
      />
      <Field
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full bg-blue-700 text-white rounded-lg py-3 font-medium hover:bg-blue-800 transition
          ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {isLoading ? "Registering..." : "Register Now"}
      </button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {toast.message && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded-md text-white shadow-lg text-sm
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}
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
