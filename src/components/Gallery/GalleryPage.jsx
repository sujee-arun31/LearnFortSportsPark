import React, { useState } from "react";
import { FaArrowLeft, FaPlay, FaPlus, FaTimes } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
const sportsData = {
  Football: {
    images: [
      "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "football1",
        thumbnail:
          "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "football2",
        thumbnail:
          "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  Cricket: {
    images: [
      "https://images.pexels.com/photos/11429617/pexels-photo-11429617.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "cricket1",
        thumbnail:
          "https://images.pexels.com/photos/11429617/pexels-photo-11429617.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  Basketball: {
    images: [
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1837510/pexels-photo-1837510.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "basketball1",
        thumbnail:
          "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  Skating: {
    images: [
      "https://images.pexels.com/photos/1549044/pexels-photo-1549044.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "skating1",
        thumbnail:
          "https://images.pexels.com/photos/1549044/pexels-photo-1549044.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  Volleyball: {
    images: [
      "https://images.pexels.com/photos/3774927/pexels-photo-3774927.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1837510/pexels-photo-1837510.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "volleyball1",
        thumbnail:
          "https://images.pexels.com/photos/3774927/pexels-photo-3774927.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  Badminton: {
    images: [
      "https://images.pexels.com/photos/7988696/pexels-photo-7988696.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "badminton1",
        thumbnail:
          "https://images.pexels.com/photos/7988696/pexels-photo-7988696.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  Karate: {
    images: [
      "https://images.pexels.com/photos/625330/pexels-photo-625330.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1837510/pexels-photo-1837510.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "karate1",
        thumbnail:
          "https://images.pexels.com/photos/625330/pexels-photo-625330.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  Athletics: {
    images: [
      "https://images.pexels.com/photos/209968/pexels-photo-209968.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    videos: [
      {
        id: "athletics1",
        thumbnail:
          "https://images.pexels.com/photos/209968/pexels-photo-209968.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
};

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState(null);
  const [activeTab, setActiveTab] = useState("images");
  const [showForm, setShowForm] = useState(false);
  const [galleryType, setGalleryType] = useState("image");
  const [videoLinks, setVideoLinks] = useState([""]);
  const [selectedImages, setSelectedImages] = useState([]);
  const location = useLocation();
  // 👇 Check if user came from Admin Dashboard
  const isFromAdmin = location.state?.fromAdmin || false;

  const handleBack = () => {
    if (selectedSport) setSelectedSport(null);
    else navigate(-1);
  };

  const handleAddVideoField = () => {
    setVideoLinks([...videoLinks, ""]);
  };

  const handleVideoChange = (index, value) => {
    const updated = [...videoLinks];
    updated[index] = value;
    setVideoLinks(updated);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files || []);
    const previews = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(previews);
  };

  const renderSportsGrid = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Gallery</h2>
        {isFromAdmin && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            + Add New Gallery
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Object.keys(sportsData).map((sport) => (
          <div
            key={sport}
            onClick={() => setSelectedSport(sport)}
            className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md shadow-md border border-blue-100 hover:shadow-2xl hover:scale-[1.03] hover:border-blue-300 transition-all duration-300 cursor-pointer"
          >
            <img
              src={sportsData[sport].images[0]}
              alt={sport}
              className="w-full h-44 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-3">
              <h3 className="text-white font-bold text-lg tracking-wide">
                {sport}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSportGallery = () => {
    const sport = sportsData[selectedSport];
    const content = activeTab === "images" ? sport.images : sport.videos;

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-wide">
            {selectedSport}
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex bg-blue-50 border border-blue-200 rounded-full overflow-hidden">
              <button
                onClick={() => setActiveTab("images")}
                className={`px-5 py-2 text-sm font-medium transition-all ${activeTab === "images"
                  ? "bg-[#1E3A8A] text-white shadow-md"
                  : "text-gray-600 hover:text-blue-700"
                  }`}
              >
                Images
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-5 py-2 text-sm font-medium transition-all ${activeTab === "videos"
                  ? "bg-[#1E3A8A] text-white shadow-md"
                  : "text-gray-600 hover:text-blue-700"
                  }`}
              >
                Videos
              </button>
            </div>
            {isFromAdmin && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                + Add New Gallery
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-white/80 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {activeTab === "videos" ? (
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={`${selectedSport} video ${index + 1}`}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <FaPlay className="text-[#1E3A8A] text-lg" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item}
                  alt={`${selectedSport} image ${index + 1}`}
                  className="w-full h-44 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#DBEAFE]">
    {/* Header */}
<header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md sticky top-0 z-10">
  <div className="max-w-5xl mx-auto px-4 py-4 flex items-center">
    <button 
      onClick={() => navigate(-1)} 
      className="p-2 rounded-full bg-white/10 hover:bg-white/10 mr-4 transition"
    >
      <FiArrowLeft className="w-5 h-5" />
    </button>

    <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
      {selectedSport || "Gallery"}
    </h1>
  </div>
</header>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        {selectedSport ? renderSportGallery() : renderSportsGrid()}
      </div>
      



      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">
              Add New Gallery
            </h2>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Sports Name"

                  className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter Event Name"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter Gallery Title"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter Folder Name"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 text-left">
                  Gallery Type
                </label>
                <select
                  value={galleryType}
                  onChange={(e) => setGalleryType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>

              {galleryType === "image" ? (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 text-left">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                  {selectedImages.length > 0 && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {selectedImages.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-20 object-cover rounded-md border"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 text-left">
                    YouTube Video Links
                  </label>
                  {videoLinks.map((link, index) => (
                    <input
                      key={index}
                      type="text"
                      value={link}
                      onChange={(e) =>
                        handleVideoChange(index, e.target.value)
                      }
                      placeholder={`Enter video link ${index + 1}`}
                      className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={handleAddVideoField}
                    className="text-sm text-blue-600 mt-2 hover:underline"
                  >
                    + Add another link
                  </button>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 text-left">
                  Conducted Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 text-left">
                  Status
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2 mt-1">
                  <option>Pending</option>
                  <option>Active</option>
                  <option>Blocked</option>
                </select>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg mr-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;


