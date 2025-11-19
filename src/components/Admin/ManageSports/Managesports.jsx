import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

// ✅ Confirmation Popup Component
const ConfirmationDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 transform transition-all duration-200 scale-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageSports = () => {
  const navigate = useNavigate();

  const initialSports = [
    {
      id: 1,
      name: "Cricket",
      ground: "Green Field Stadium",
      actualPrice: 2000,
      finalPrice: 1500,
      status: true,
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Football",
      ground: "National Sports Arena",
      actualPrice: 1800,
      finalPrice: 1600,
      status: true,
      image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Basketball",
      ground: "City Indoor Court",
      actualPrice: 1200,
      finalPrice: 1000,
      status: false,
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Tennis",
      ground: "Royal Lawn Club",
      actualPrice: 2200,
      finalPrice: 2000,
      status: true,
      image: "https://images.unsplash.com/photo-1584466977773-270d2e3f0b3c?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Badminton",
      ground: "Smash Zone",
      actualPrice: 1000,
      finalPrice: 850,
      status: false,
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=200&h=200&fit=crop",
    },
  ];

  const [sportsData, setSportsData] = useState(initialSports);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);

  // 🗑️ Handle delete click
  const handleDeleteClick = (sport) => {
    setSelectedSport(sport);
    setShowDeleteDialog(true);
  };

  // ✅ Confirm delete
  const handleConfirmDelete = () => {
    setSportsData((prev) => prev.filter((s) => s.id !== selectedSport.id));
    setShowDeleteDialog(false);
    setSelectedSport(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-emerald-50 to-white flex flex-col">
      {/* Header */}
         {/* Header */} <header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10"> <div className="max-w-5xl mx-auto px-4 py-4 flex items-center"> <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 hover:bg-white/10 mr-4 transition" > <FiArrowLeft className="w-5 h-5" /> </button> <h1 className="text-xl sm:text-2xl font-semibold tracking-wide"> Manage Sports </h1> </div> </header>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6 mx-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Sports List</h2>
          <button
            onClick={() => navigate("/add-sport")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            + Add New Sport
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  S.no
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Sport Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ground Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actual Price (₹)
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Final Price (₹)
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {sportsData.map((sport, index) => (
                <tr
                  key={sport.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4 text-sm text-gray-500">
                    {index + 1}
                  </td>

                  {/* Image */}
                  <td className="py-4 px-4">
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="w-14 h-14 object-cover rounded-lg shadow-sm border border-gray-200"
                    />
                  </td>

                  <td className="py-4 px-4 text-sm font-medium text-gray-800">
                    {sport.name}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">
                    {sport.ground}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">
                    ₹{sport.actualPrice}
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-green-600">
                    ₹{sport.finalPrice}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        sport.status
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {sport.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-sm">
                    <button
                      onClick={() =>
                        navigate("/edit-sport", { state: { sport } })
                      }
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(sport)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {sportsData.length === 0 && (
            <div className="text-center py-10 text-gray-500 text-sm">
              No sports available.
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Sport"
        message={`Are you sure you want to delete "${selectedSport?.name}"? This action cannot be undone.`}
      />
    </div>
  );
};

export default ManageSports;
