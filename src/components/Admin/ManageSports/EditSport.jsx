import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUploadCloud, FiInfo, FiDollarSign, FiHash, FiCheck, FiX, FiMapPin, FiFolderPlus } from "react-icons/fi";

const EditSport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sportData = location.state?.sport;

  const [status, setStatus] = useState(sportData?.status || true);
  const [sportImage, setSportImage] = useState(sportData?.image || null);
  const [bannerImage, setBannerImage] = useState(sportData?.bannerImage || null);
  const [formData, setFormData] = useState({
    name: "",
    ground: "",
    actualPrice: "",
    finalPrice: "",
    halfGroundSlots: "",
    fullGroundSlots: "",
    description: "",
  });

  // Pre-fill form with sport data
  useEffect(() => {
    if (sportData) {
      setFormData({
        name: sportData.name || "",
        ground: sportData.ground || "",
        actualPrice: sportData.actualPrice || "",
        finalPrice: sportData.finalPrice || "",
        halfGroundSlots: sportData.halfGroundSlots || "",
        fullGroundSlots: sportData.fullGroundSlots || "",
        description: sportData.description || "",
      });
      setStatus(sportData.status !== false);
      setSportImage(sportData.image || null);
    }
  }, [sportData]);

  const handleSportImageChange = (e) => {
    setSportImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleBannerImageChange = (e) => {
    setBannerImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated sport data:", { ...formData, status, sportImage, bannerImage });
    // TODO: call your update API here
    navigate("/sports");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-md py-4 px-6 flex items-center text-white rounded-sm">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center focus:outline-none"
        >
          <FiArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-xl sm:text-2xl font-semibold tracking-wide">Edit Sport</span>
        </button>
      </div>

      {/* Form Card */}
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl  overflow-hidden border border-gray-100">
        {/* Form Header */}
        <div className="px-8 pt-6 pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Left Side - Title */}
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-800">Edit Sport Information</h2>
              <p className="text-sm text-gray-500">
                Update the details below to modify the sport
              </p>
            </div>
          </div>

          {/* Right Side - Status Toggle */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <div className="flex items-center">
              <div
                onClick={() => setStatus(!status)}
                className={`relative inline-flex items-center h-8 rounded-full w-16 cursor-pointer transition-colors duration-200 ${status ? "bg-green-500" : "bg-gray-300"
                  }`}
              >
                <span
                  className={`inline-block w-7 h-7 transform transition-transform duration-200 rounded-full bg-white shadow-md flex items-center justify-center ${status ? "translate-x-9" : "translate-x-1"
                    }`}
                >
                  {status ? (
                    <FiCheck className="text-green-500" size={18} />
                  ) : (
                    <FiX className="text-gray-500" size={18} />
                  )}
                </span>
              </div>
              <span
                className={`ml-3 text-sm font-medium ${status ? "text-green-600" : "text-gray-600"
                  }`}
              >
                {status ? "Active" : "Inactive"}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {status
                ? "This sport will be visible to users"
                : "This sport will be hidden from users"}
            </p>
          </div>
        </div>

        <form className="p-8 pt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sport Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <span>Sport Name</span>
                <span className="text-red-500 ml-1">*</span>
                <FiInfo className="ml-2 text-gray-400" size={14} />
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Football, Cricket"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiFolderPlus className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Enter the name of the sport</p>
            </div>

            {/* Ground Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <span>Ground Name</span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="ground"
                  value={formData.ground}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Main Field, Court 1"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Name or number of the ground/field</p>
            </div>

            {/* Actual Price per Slot */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <span>Actual Price per Slot</span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiDollarSign className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="actualPrice"
                  value={formData.actualPrice}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 2000"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Standard price before any discounts</p>
            </div>

            {/* Final Price per Slot */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <span>Discounted Price per Slot</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiDollarSign className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="finalPrice"
                  value={formData.finalPrice}
                  onChange={handleChange}
                  placeholder="e.g. 1500"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Special price after discount (if any)</p>
            </div>

            {/* Half Ground */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <span>Half Ground Slots</span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiHash className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="halfGroundSlots"
                  value={formData.halfGroundSlots}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 4"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Number of slots for half ground</p>
            </div>

            {/* Full Ground */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <span>Full Ground Slots</span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiHash className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="fullGroundSlots"
                  value={formData.fullGroundSlots}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 8"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Number of slots for full ground</p>
            </div>
          </div>

          {/* About Sport */}
          <div className="mt-2 mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <span>About Sport</span>
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Write a detailed description about this sport, including any special rules or requirements..."
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                <span className="font-medium">{formData.description?.length || 0}</span>/500 characters
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* Sport Image */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sport Image
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${sportImage ? 'border-green-200 bg-green-50' : 'border-gray-300 hover:border-blue-400 bg-gray-50'
                }`}>
                <label className="cursor-pointer flex flex-col items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                    <FiUploadCloud className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      {sportImage ? 'Image Uploaded' : 'Upload Sport Image'}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      {sportImage ? 'Click to change' : 'PNG, JPG, JPEG up to 5MB'}
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      Recommended sizes:
                      <br />
                      <span className="font-medium text-gray-500">
                        320×120 (Sports Image) • 1200×400 (Website)
                      </span>
                    </p>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSportImageChange}
                    className="hidden"
                  />
                  {sportImage ? (
                    <div className="mt-4">
                      <div className="relative inline-block">
                        <img
                          src={sportImage}
                          alt="Sport"
                          className="h-24 w-24 object-cover rounded-lg shadow-sm border-2 border-white"
                        />
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                          <FiCheck size={12} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Select File
                    </button>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="space-y-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Banner Image
              <span className="text-blue-500 ml-1">(Optional)</span>
            </label>
            <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${bannerImage ? 'border-purple-200 bg-purple-50' : 'border-gray-300 hover:border-blue-400 bg-gray-50'
              }`}>
              <label className="cursor-pointer flex flex-col items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mb-3">
                  <FiUploadCloud className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    {bannerImage ? 'Banner Uploaded' : 'Upload Banner Image'}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {bannerImage ? 'Click to change' : 'Recommended size: 1200x400px, JPG or PNG up to 2MB'}
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBannerImageChange}
                  className="hidden"
                />
                {bannerImage ? (
                  <div className="mt-4 w-full">
                    <div className="relative inline-block max-w-full">
                      <img
                        src={bannerImage}
                        alt="Banner Preview"
                        className="h-32 w-full object-cover rounded-lg shadow-sm border-2 border-white max-w-2xl"
                      />
                      <div className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-1">
                        <FiCheck size={12} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Select Banner
                  </button>
                )}
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              A banner image will be displayed at the top of the sport's page
            </p>
          </div>

          {/* Form Actions */}
          <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto mb-3 sm:mb-0 px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Cancel
            </button>
            <div className="flex space-x-3 w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-0.5"
              >
                Update Sport
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSport;
