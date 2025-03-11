import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaMugHot,
  FaTasks,
  FaLaptop,
  FaBookOpen,
} from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Navbar } from "./Navbar";

const TrackProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { employee } = location.state || {};

  const maleAvatars = [
    "https://randomuser.me/api/portraits/men/10.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/54.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
    "https://randomuser.me/api/portraits/men/85.jpg",
  ];

  const femaleAvatars = [
    "https://randomuser.me/api/portraits/women/11.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/22.jpg",
    "https://randomuser.me/api/portraits/women/91.jpg",
  ];

  const getAvatarByGender = (gender) => {
    if (gender?.toLowerCase() === "female") {
      return femaleAvatars[Math.floor(Math.random() * femaleAvatars.length)];
    } else if (gender?.toLowerCase() === "male") {
      return maleAvatars[Math.floor(Math.random() * maleAvatars.length)];
    } else {
      const allAvatars = [...maleAvatars, ...femaleAvatars];
      return allAvatars[Math.floor(Math.random() * allAvatars.length)];
    }
  };

  if (employee && (!employee.avatar || employee.avatar === "/profile.png")) {
    employee.avatar = getAvatarByGender(employee.gender);
  }

  const defaultEmployee = {
    name: "Arpita Das",
    id: "12345",
    designation: "UI/UX Designer",
    location: "Pune, MH",
    gender: "female",
    avatar: getAvatarByGender("female"),
    inTime: "10:00 AM",
    breakTime: "45 min",
    totalWorkTime: "4 h 20 m",
    tasksInProgress: 3,
  };

  const data = {
    ...defaultEmployee,
    ...employee,
    inTime: employee?.inTime || defaultEmployee.inTime,
    breakTime: employee?.breakTime || defaultEmployee.breakTime,
    totalWorkTime: employee?.totalWorkTime || defaultEmployee.totalWorkTime,
    tasksInProgress:
      employee?.tasksInProgress ?? defaultEmployee.tasksInProgress,
  };

  const [activeTab, setActiveTab] = useState("Track User");

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

      {/* Navigation Tabs with consistent styling */}
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

      {/* Header with Search */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">
          Employee Management & Activities
        </h3>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Profile Card Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md">
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Profile Info */}
          <div className="flex items-center gap-5">
            <img
              src={data.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border border-gray-300"
            />
            <div className="space-y-1 text-sm text-gray-700">
              <h2 className="text-xl font-semibold text-black">{data.name}</h2>
              <p>
                <span className="font-medium">Employee ID</span>: {data.id}
              </p>
              <p>
                <span className="font-medium">Position</span>:{" "}
                {data.designation}
              </p>
            </div>
          </div>

          {/* Status and Location */}
          <div className="flex justify-between items-center mt-4 w-full max-w-md p-4 rounded-md">
            <div className="flex items-center gap-2">
              <FaLaptop className="text-4xl text-black" />
              <span className="text-green-600 font-semibold text-base">
                {employee.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-4xl text-black" />
              <span className="text-black font-semibold text-base">
                {employee.location}
              </span>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 mb-6" />

        {/* Work Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200">
          <div className="flex justify-between items-center p-5 border-r border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Today's In Time</p>
              <h3 className="text-xl font-bold text-black">{data.inTime}</h3>
            </div>
            <FaClock className="text-3xl text-black" />
          </div>

          <div className="flex justify-between items-center p-5 border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Break Time</p>
              <h3 className="text-xl font-bold text-black">{data.breakTime}</h3>
            </div>
            <FaMugHot className="text-3xl text-black" />
          </div>

          <div className="flex justify-between items-center p-5 border-r border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Work Time</p>
              <h3 className="text-xl font-bold text-black">
                {data.totalWorkTime}
              </h3>
            </div>
            <FaBriefcase className="text-3xl text-black" />
          </div>

          <div className="flex justify-between items-center p-5">
            <div>
              <p className="text-sm text-gray-500 mb-1">Task In Progress</p>
              <h3 className="text-xl font-bold text-black">
                {data.tasksInProgress}
              </h3>
            </div>
            <FaTasks className="text-3xl text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackProfile;