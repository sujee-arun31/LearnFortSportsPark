import React from "react";
import LearnFortLogo from "../images/LearnFort.png"; // ✅ adjust the path if needed

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1E40AF] to-[#1E3A8A] overflow-x-hidden overflow-y-hidden">
      <div className="text-center">
        {/* ✅ Circular Logo */}
        <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center rounded-full bg-white overflow-hidden shadow-lg">
          <img
            src={LearnFortLogo}
            alt="LearnFort Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* App Name */}
        <h1 className="text-3xl font-bold text-white mb-2">
          LearnFort Sports Park
        </h1>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="w-3 h-3 bg-white/90 rounded-full"
              style={{
                animation: `pulse 1.5s ease-in-out ${dot * 0.3}s infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
