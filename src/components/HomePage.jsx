import React, { useState, useEffect } from 'react';
import { FiSearch, FiBell, FiChevronLeft, FiChevronRight,FiChevronDown  , FiMenu ,FiX , FiMapPin, FiStar, FiClock, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SportsList from './Booking/SportsList';
import Contacting from './Contacting';
import AdminDashboard from './Admin/AdminDashboard';
import LearnFortLogo from '../images/LearnFort.png';

const HomePage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [selectedBookingType, setSelectedBookingType] = useState(null);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const navigate = useNavigate();

  // Menu items data
  // Menu items data
  const menuItems = [
    { id: 'games', label: 'Games List', submenu: [] }, // no submenu
    {
      id: 'book',
      label: 'Book Slot',
      submenu: [
        { id: 'daily', label: 'Daily' },
        { id: 'weekly', label: 'Weekly' },
        { id: 'monthly', label: 'Monthly' },
        { id: 'special', label: 'Special Events' }
      ]
    },
    { id: 'gallery', label: 'Gallery', submenu: [] }, // ✅ changed
    { id: 'contact', label: 'Contact Us', submenu: [] },
    { id: 'about', label: 'About Us', submenu: ['Our Story', 'Facilities', 'Team'] },
    { id: 'admin', label: 'Admin Only', submenu: ['Dashboard', 'Bookings', 'Users'] },
    { id: 'logout', label: 'Logout', submenu: [] },
  ];

  // Sports banner data
  const sportsBanners = [
    {
      id: 1,
      title: 'Football Turfs',
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1471&q=80',
      sport: 'football'
    },
    {
      id: 2,
      title: 'Cricket Grounds',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1605&q=80',
      sport: 'cricket'
    },
    {
      id: 3,
      title: 'Tennis Courts',
      image: 'https://images.unsplash.com/photo-1554068864-787f01234413?auto=format&fit=crop&w=1470&q=80',
      sport: 'tennis'
    },
    {
      id: 4,
      title: 'Basketball Courts',
      image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1374&q=80',
      sport: 'basketball'
    },
    {
      id: 5,
      title: 'Badminton Courts',
      image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1470&q=80',
      sport: 'badminton'
    },
    {
      id: 6,
      title: 'Swimming Pool',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1470&q=80',
      sport: 'swimming'
    }
  ];

  // Available turfs data
  const availableTurfs = [
    {
      id: 1,
      name: 'Victory Sports Arena',
      location: 'Downtown',
      // rating: 4.8,
      price: 50,
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1471&q=80',
      sport: 'football',
      distance: '1.2 km away',
      timings: '6:00 AM - 11:00 PM'
    },
    {
      id: 2,
      name: 'Elite Cricket Ground',
      location: 'Westside',
      // rating: 4.6,
      price: 40,
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1605&q=80',
      sport: 'cricket',
      distance: '2.5 km away',
      timings: '7:00 AM - 10:00 PM'
    },
    {
      id: 3,
      name: 'Grand Slam Courts',
      location: 'Riverside',
      // rating: 4.9,
      price: 35,
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1470&q=80",

      sport: 'tennis',
      distance: '3.1 km away',
      timings: '5:00 AM - 11:00 PM'
    },
    {
      id: 4,
      name: 'Hoops Arena',
      location: 'East End',
      // rating: 4.7,
      price: 45,
      image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1374&q=80',
      sport: 'basketball',
      distance: '1.8 km away',
      timings: '6:00 AM - 10:00 PM'
    }
  ];

  // Auto-rotate banners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % sportsBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % sportsBanners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + sportsBanners.length) % sportsBanners.length);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSubmenu = (menuId, item) => {
    if (menuId === 'games') {
      navigate('/games'); // ✅ redirect to Games page
      setIsDrawerOpen(false);
      return;
    } else if (menuId === 'book' && item && item.id) {
      setSelectedBookingType(item.id);
      setActiveSubmenu('');
    } else if (menuId === 'contact') {
      navigate('/contacting');
      setIsDrawerOpen(false);
      return;
    }
    else if (menuId === 'gallery') {
      navigate('/gallery'); // ✅ redirect to gallery page
      setIsDrawerOpen(false);
      return;
    }
    else if (menuId === 'admin') {
      navigate('/admin');
      setIsDrawerOpen(false);
    } else if (menuId === 'about') {
      navigate('/about');
      setIsDrawerOpen(false);

    }
    else if (menuId === 'contacting') {
      navigate('/contacting');
      setIsDrawerOpen(false);
    }
    else if (menuId === 'logout') {
      // Redirect to Login page on logout
      navigate('/login');
      setIsDrawerOpen(false);
      return;
    }
     else {
      setActiveSubmenu(activeSubmenu === menuId ? '' : menuId);
      setSelectedBookingType(null);
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const renderSubmenu = (items, menuId) => (
    <div className="">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => toggleSubmenu(menuId, typeof item === 'string' ? { id: item.toLowerCase() } : item)}
          className="w-full px-4 py-3 text-left text-sm font-medium
           text-white bg-blue-700
           flex justify-between items-center
           rounded-xl shadow-md 
           hover:from-blue-700 hover:to-blue-600 
           hover:shadow-lg transition-all duration-300"

        >
          {typeof item === 'string' ? item : item.label}
        </button>
      ))}
    </div>
  );

  // Show sports list when a booking type is selected
  if (selectedBookingType) {
    return <SportsList onBack={() => setSelectedBookingType(null)} />;
  }


  // Show admin dashboard when admin is selected
  // if (showAdminDashboard) {
  //   return <AdminDashboard onBack={() => setShowAdminDashboard(false)} />;
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="flex items-center justify-between p-4 bg-[#1E40AF] shadow-md sticky top-0 z-10 border-b border-blue-200">
          <div className="flex items-center space-x-4">
            {/* Menu Button */}
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-md bg-white/10 transition-colors"
              aria-label="Open menu"
            >
        <FiMenu className="w-6 h-6 text-white" />

            </button>

            <h1 className="text-xl font-bold text-white">LearnFort Sports Park</h1>
          </div>
          <div className="flex items-center space-x-4  ">
            <button className="p-2 rounded-md bg-white/10 text-white transition-transform transform hover:scale-105">
              <FiUser className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer */}
      {/* Side Drawer */}
      <div className={`fixed inset-0 z-50 ${isDrawerOpen ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeDrawer}
        ></div>

        {/* Drawer Content */}
        <div className="absolute inset-y-0 left-0 w-72 bg-gradient-to-b from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] shadow-2xl rounded-r-3xl transform transition-transform duration-300 ease-in-out text-white">
          {/* Drawer Header */}
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/20 flex flex-col items-center text-center">
            {/* Logo */}
            <img
              src={LearnFortLogo}
              alt="LearnFort Logo"
              className="w-14 h-14 object-cover rounded-full shadow-md mb-2 border-2 border-white/30"
            />

            {/* Title */}
            <h1 className="text-base font-bold leading-tight tracking-wide">
              LearnFort Sports Park
            </h1>

            {/* Subtext */}
            <p className="text-xs text-blue-200 mt-1 italic">
              An unit of Eshvar Edu Foundation
            </p>

            {/* Close Button (top-right corner) */}
            <button
              onClick={closeDrawer}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
          <FiX className="w-6 h-6 text-white" />

            </button>
          </div>

          {/* Menu Items */}
          <nav className="h-[calc(100%-140px)] overflow-y-auto py-4 px-2">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => toggleSubmenu(item.id)}
                    className={`w-full flex justify-between items-center px-5 py-3 rounded-lg transition-all
            bg-blue-700 text-white font-semibold hover:bg-blue-600`}
                  >
                    <span>{item.label}</span>
                    {item.submenu.length > 0 && item.id !== "about" && item.id !== "admin" && (
                    <FiChevronDown
  className={`w-4 h-4 transform transition-transform ${
    activeSubmenu === item.id ? "rotate-180 text-yellow-300" : ""
  }`}
/>
                    )}
                  </button>

                  {/* Submenu */}
                  {activeSubmenu === item.id &&
                    item.submenu &&
                    item.submenu.length > 0 &&
                    renderSubmenu(item.submenu, item.id)}
                </li>
              ))}
            </ul>
          </nav>



        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4">
        {/* Sports Banner Carousel */}
        <div className="relative mb-10 rounded-3xl overflow-hidden h-64 shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${sportsBanners[currentBanner].image})`
            }}
          >
            {/* Clickable center area opens venue details */}
            <button
              type="button"
              onClick={() =>
                navigate(`/venue/${sportsBanners[currentBanner].sport}`)
              }
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center w-full h-full focus:outline-none cursor-pointer"
            >
              <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">
                {sportsBanners[currentBanner].title}
              </h2>
            </button>
          </div>

          {/* Arrows (only slide, no navigation) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevBanner();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextBanner();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
          >
            <FiChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {sportsBanners.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentBanner(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${currentBanner === index ? 'bg-white' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>


        {/* Available Turfs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Turfs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTurfs.map((turf) => (
              <div key={turf.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={turf.image}
                    alt={turf.name}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <FiStar className="mr-1" /> {turf.rating}
                  </div> */}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{turf.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <FiMapPin className="mr-1" size={14} />
                        <span>{turf.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 text-sm line-through">${turf.price + 10}</span>
                      <p className="text-lg font-bold text-blue-600">${turf.price}<span className="text-sm text-gray-500">/hr</span></p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <FiClock className="mr-1" size={14} />
                    <span>{turf.timings}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{turf.distance}</span>
                    <button
                      onClick={() => navigate(`/book/${turf.sport}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
