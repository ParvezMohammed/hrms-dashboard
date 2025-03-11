import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { FaBookOpen } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { label: "Create User Accounts", path: "/create-account" },
    { label: "Manage Roles", path: "/manage-roles" },
    { label: "Track User", path: "/user-activity" },
    { label: "Reset Password", path: "/reset-password" },
  ];

  const handleTabClick = (label, path) => {
    setActiveTab(label);
    navigate(path);
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <Navbar heading="" />

      {/* Work Management Section */}
      <div>
        <h3 className="text-xl font-semibold flex items-center">
          <span className="flex items-center gap-1">
            <FaBookOpen />
            Work Management
          </span>
        </h3>

        {/* Clickable Tabs */}
        <div className="flex space-x-6 mt-6 mb-8">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`px-6 py-3 rounded-xl shadow-md text-sm font-semibold cursor-pointer
                ${
                  activeTab === tab.label
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              onClick={() => handleTabClick(tab.label, tab.path)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="mt-8 bg-blue-50 rounded-2xl p-8 relative overflow-hidden">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">
            Manage ALL <span className="text-yellow-400">Your Work</span>
          </h2>
          <p className="text-gray-600">
            A relaxed employee is a performing employee.
          </p>
        </div>
        <img
          src="/illustration.svg"
          alt="Work illustration"
          className="absolute right-0 bottom-0 w-72"
        />
      </div>
    </div>
  );
};

export default Dashboard;