import React from "react";
import {
    FaBell,
    FaCaretDown,
    FaSignOutAlt,
    FaUser,
  } from "react-icons/fa";
  import searchIcon from "../assets/search-icon.svg";
  import profileImage from "../components/profile.png";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export const Navbar = ({ heading }) => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
  
    const handleNotification = () => {
      navigate("/notification");
    };
  
    return (
      <div className="flex justify-between items-center mb-4 relative">
        {/* Left: Greeting */}
        <div>
          <h2 className="text-lg font-semibold">Hello Rashmika 👋</h2>
          <p className="text-gray-500">Good Morning</p>
        </div>
  
        {/* Right: Search, Notification, Profile */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative w-[200px] border px-3 py-2 rounded-lg">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="absolute top-2.5 left-3 w-5"
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 w-full bg-transparent outline-none text-sm"
            />
          </div>
  
          {/* Notification Icon */}
          <div className="border rounded-lg p-2.5 cursor-pointer">
            <FaBell
              className="text-gray-600 text-xl"
              onClick={handleNotification}
            />
          </div>
  
          {/* Profile Dropdown */}
          <div
            className="flex items-center gap-2 cursor-pointer border rounded-lg px-2 py-1 relative"
            onClick={() => setOpen(!isOpen)}
          >
            <img
              src={profileImage}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold">Rashmika</p>
              <p className="text-sm text-gray-500">HR Admin</p>
            </div>
            <FaCaretDown />
          </div>
  
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-16 right-0 bg-white border rounded-lg w-32 shadow-lg z-10">
              <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FaUser className="text-sm" />
                <span className="text-sm">Profile</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FaSignOutAlt className="text-sm" />
                <span className="text-sm">Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };