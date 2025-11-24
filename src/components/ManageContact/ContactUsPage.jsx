import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [reply, setReply] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const issues = {
    pending: [
      {
        id: 1,
        customer: "John Doe",
        issue: "Booking issue - Slot not confirmed",
        date: "Nov 6, 2025",
        status: "Unread",
        message:
          "Hi, I booked a slot yesterday but it’s still not showing as confirmed in my dashboard. Please check.",
      },
      {
        id: 2,
        customer: "Priya Sharma",
        issue: "Payment deducted but booking not shown",
        date: "Nov 4, 2025",
        status: "Unread",
        message:
          "My payment was successful but I can’t see my booking in the app. Kindly assist.",
      },
    ],
    completed: [
      {
        id: 3,
        customer: "Karan Patel",
        issue: "Need invoice for last booking",
        date: "Nov 2, 2025",
        status: "Read",
        message:
          "I need an invoice for my last booking for reimbursement purposes. Can you share it?",
      },
      {
        id: 4,
        customer: "Aditi Verma",
        issue: "Refund not received yet",
        date: "Nov 1, 2025",
        status: "Read",
        message:
          "I cancelled my booking last week but haven’t received the refund yet.",
      },
    ],
  };

  const getIssues = () => issues[activeTab] || [];
  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  const handleSendReply = () => {
    if (reply.trim() === "") return;
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedIssue(null);
      setReply("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white text-gray-800 font-['Inter',sans-serif] relative">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/10 mr-4 transition"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            Customer Issues
          </h1>
        </div>
      </header>


      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <div className="flex justify-center space-x-3 bg-white p-2 rounded-full shadow-md border border-blue-100">
          {["pending", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${activeTab === tab
                ? "bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md"
                : "text-gray-600 hover:text-blue-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Issues List */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-4 mt-8"
      >
        <h2 className="text-lg font-semibold text-blue-700 mb-5">
          {activeTab === "pending" ? "Pending Issues" : "Completed Issues"}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {getIssues().length > 0 ? (
            getIssues().map((issue) => (
              <motion.div
                key={issue.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedIssue(issue)}
                className={`bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex items-center justify-between cursor-pointer`}
              >
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center text-lg font-bold shadow-md relative">
                    {getInitial(issue.customer)}
                    {issue.status === "Unread" && (
                      <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm">
                      {issue.issue}
                    </h3>
                    <p className="flex items-center space-x-1 text-xs text-gray-400 mt-1">
                      From: {issue.customer}
                    </p>
                    <div className="flex items-center space-x-1 text-xs text-gray-400 mt-1">
                      <FiClock className="w-3 h-3" />
                      <span>{issue.date}</span>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`px-3 py-1 text-[11px] font-semibold rounded-full ${issue.status === "Unread"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                    }`}
                >
                  {issue.status}
                </span>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-10">
              No {activeTab} issues found.
            </p>
          )}
        </div>
      </motion.div>

      {/* Reply Modal */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
          >
            <button
              onClick={() => setSelectedIssue(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Reply to {selectedIssue.customer}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              Subject: <span className="font-medium">{selectedIssue.issue}</span>
            </p>
            <p className="text-sm text-gray-500 italic border-l-4 border-blue-200 pl-3 mt-2 mb-4">
              “{selectedIssue.message}”
            </p>

            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Type your reply..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            ></textarea>

            <button
              onClick={handleSendReply}
              className="mt-4 w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-2 rounded-lg font-medium hover:shadow-md transition"
            >
              Send Reply
            </button>

            {showSuccess && (
              <p className="text-green-600 text-sm text-center mt-3 font-medium">
                ✅ Reply sent to {selectedIssue.customer}
              </p>
            )}
          </motion.div>
        </div>
      )}


    </div>
  );
};

export default ContactUsPage;
