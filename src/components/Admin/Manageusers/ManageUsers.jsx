import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
  FiUserX,
  FiCheckCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [admins] = useState([
    {
      id: 1,
      name: "Mike Johnson",
      email: "mike.j@example.com",
      joined: "2025-03-10",
      status: "Active",
    },
  ]);

  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      joined: "2025-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice.smith@example.com",
      joined: "2025-02-20",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      joined: "2025-04-05",
      status: "Active",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.w@example.com",
      joined: "2025-05-12",
      status: "Pending",
    },
  ]);

  const [activeTab, setActiveTab] = useState("Users");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [actionPosition, setActionPosition] = useState({ x: 0, y: 0 });

  const handleActionClick = (user, e) => {
    e.stopPropagation();
    setSelectedUser(user);
    const rect = e.currentTarget.getBoundingClientRect();
    setActionPosition({ x: rect.right - 160, y: rect.bottom + 5 });
    setShowActions(true);
  };

  const handleAction = (action) => {
    console.log(`${action} user:`, selectedUser);
    setShowActions(false);
  };

  useEffect(() => {
    const handleClickOutside = () => setShowActions(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const UserCard = ({ user }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white/90 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all flex justify-between items-center p-4 border border-gray-100"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-xs text-gray-400 mt-1">Joined: {user.joined}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            user.status === "Active"
              ? "bg-green-100 text-green-700"
              : user.status === "Pending"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {user.status}
        </span>
        <button
          onClick={(e) => handleActionClick(user, e)}
          className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
        >
          <FiMoreVertical className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white flex flex-col">
      {/* Header */}
          {/* Header */} <header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10"> <div className="max-w-5xl mx-auto px-4 py-4 flex items-center"> <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 hover:bg-white/10 mr-4 transition"> <FiArrowLeft className="w-5 h-5" /> </button> <h1 className="text-xl sm:text-2xl font-semibold tracking-wide"> Manage users</h1> </div> </header>


      {/* Tabs */}
      <div className="flex justify-center mt-4">
        <div className="bg-white/90 rounded-full p-1 flex shadow-inner">
          {["Users", "Admins"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow px-6 py-6">
        <AnimatePresence mode="wait">
          {activeTab === "Admins" ? (
            <motion.div
              key="admins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-black font-semibold mb-4 text-lg">
                All Admins
              </h2>
              <div className="space-y-4">
                {admins.map((admin) => (
                  <UserCard key={admin.id} user={admin} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="users"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-black font-semibold mb-4 text-lg">
                All Users
              </h2>
              <div className="space-y-4">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Menu */}
      {showActions && selectedUser && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed bg-white rounded-md shadow-xl py-2 z-50 w-48"
          style={{
            top: `${actionPosition.y}px`,
            left: `${actionPosition.x}px`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => handleAction("edit")}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FiEdit2 className="mr-2 w-4 h-4" /> Edit
          </button>
          <button
            onClick={() =>
              handleAction(
                selectedUser.status === "Active" ? "block" : "unblock"
              )
            }
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {selectedUser.status === "Active" ? (
              <>
                <FiUserX className="mr-2 w-4 h-4 text-red-500" /> Block
              </>
            ) : (
              <>
                <FiCheckCircle className="mr-2 w-4 h-4 text-green-500" /> Unblock
              </>
            )}
          </button>
          <button
            onClick={() => handleAction("delete")}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <FiTrash2 className="mr-2 w-4 h-4" /> Delete
          </button>
        </motion.div>
      )}

      {/* Footer */}
      {/* <footer className="text-center py-4 text-sm text-white/80">
        © 2025 LearnFort Sports Park — Admin Panel
      </footer> */}
    </div>
  );
};

export default ManageUsers;
