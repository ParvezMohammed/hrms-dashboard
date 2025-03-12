import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

const ResetNewPassword = () => {
  const [activeTab, setActiveTab] = useState("Reset Password");
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen">
      <Navbar heading="" />

      {/* Work Management Section */}
      <h3 className="text-xl font-semibold flex items-center">
        <span className="flex items-center gap-1">
          <FaBookOpen />
          Work Management
        </span>
      </h3>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mt-4 mb-6">
        {[
          "Create User Accounts",
          "Manage Roles",
          "Track User",
          "Reset Password",
        ].map((tab) => (
          <div
            key={tab}
            className={`px-6 py-3 rounded-xl shadow-md text-sm font-semibold ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 cursor-default"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Reset New Password Form Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Reset Password
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Enter Email ID Password to reset password <br />
          for user in system,
        </p>

        <div className="w-full max-w-md space-y-6">
          {/* Email Input */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">
              Enter New Password
            </label>
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-full px-4 py-3 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>

          {/* Re-enter New Password */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">
              Re-Enter New Password
            </label>
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-full px-4 py-3 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/password-update")}
              className="bg-blue-200 hover:bg-blue-300 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetNewPassword;
