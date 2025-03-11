import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

type TrackUserProps = {
  setActivePage?: (page: string) => void;
};

const TrackUser: React.FC<TrackUserProps> = ({ setActivePage }) => {
  const navigate = useNavigate();
  const handleTrack = (employee) => {
    navigate("/track-profile", { state: { employee } });
  };
  const [activeTab, setActiveTab] = useState("Track User");
  const [currentPage, setCurrentPage] = useState(1);

  const employees = [
    {
      id: "EMP001",
      name: "Anjali Mehta",
      gender: "female",
      designation: "UI/UX Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Working",
      location: "Mumbai, MH",
      inTime: "10:00 AM",
      breakTime: "45 min",
      totalWorkTime: "4 h 20 m",
      tasksInProgress: 3,
    },
    {
      id: "EMP002",
      name: "Ali Ahamdan",
      gender: "male",
      designation: "Graphic Designer",
      department: "IT Department",
      teamLead: "Kadi Manela",
      status: "On Leave",
      location: "Hyderabad, TS",
      inTime: "-",
      breakTime: "-",
      totalWorkTime: "0 h 0 m",
      tasksInProgress: 0,
    },
    {
      id: "EMP003",
      name: "Mona Alghafoor",
      gender: "female",
      designation: "Graphic Designer",
      department: "IT Department",
      teamLead: "Kadi Manela",
      status: "Half Day",
      location: "Pune, MH",
      inTime: "1:00 PM",
      breakTime: "30 min",
      totalWorkTime: "2 h 10 m",
      tasksInProgress: 1,
    },
    {
      id: "EMP004",
      name: "Moustafa Adel",
      gender: "male",
      designation: "Graphic Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Lunch Break",
      location: "Delhi, DL",
      inTime: "9:30 AM",
      breakTime: "1 h",
      totalWorkTime: "3 h 30 m",
      tasksInProgress: 2,
    },
    {
      id: "EMP005",
      name: "Jhon Nelson",
      gender: "male",
      designation: "Graphic Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Working",
      location: "Chennai, TN",
      inTime: "9:00 AM",
      breakTime: "50 min",
      totalWorkTime: "5 h 10 m",
      tasksInProgress: 4,
    },
    {
      id: "EMP006",
      name: "Kadi Manela",
      gender: "male",
      designation: "Graphic Designer",
      department: "HR Department",
      teamLead: "Kadi Manela",
      status: "Working",
      location: "Bengaluru, KA",
      inTime: "8:45 AM",
      breakTime: "40 min",
      totalWorkTime: "5 h 30 m",
      tasksInProgress: 5,
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <Navbar heading="" />

      {/* Work Management Section */}
      <h3 className="text-xl font-semibold flex items-center">
        <span className="flex items-center gap-1">
          <FaBookOpen />
          Work Management
        </span>
      </h3>

      {/* Dashboard-style Tab Buttons */}
      <div className="flex space-x-4 mt-4 mb-6">
        {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map((tab) => (
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

      {/* Employee Management Table */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Employee Management & Activities</h3>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Employee Table */}
        <div className="overflow-x-auto border rounded-md shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-medium">Full Name</th>
                <th className="p-3 text-left font-medium">Designation</th>
                <th className="p-3 text-left font-medium">Assigned To</th>
                <th className="p-3 text-left font-medium">Team Lead</th>
                <th className="p-3 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-t bg-white hover:bg-gray-50">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.designation}</td>
                  <td className="p-3">{emp.department}</td>
                  <td className="p-3">{emp.teamLead}</td>
                  <td className="p-3 flex flex-col items-center space-y-2">
                    <button className="px-5 py-2 border border-blue-400 text-blue-600 rounded-md text-sm w-full text-center">
                      {emp.status}
                    </button>
                    <button
                      onClick={() => handleTrack(emp)}
                      className="px-5 py-2 border border-[#8B7D6B] bg-[#D9D2BA] text-[#8B7D6B] rounded-md text-sm w-full text-center"
                    >
                      Track
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
          <p>Page {currentPage} of 100</p>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border rounded-md"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              ◀ Prev
            </button>
            <span>Page:</span>
            <input
              type="text"
              value={currentPage}
              className="w-10 text-center border rounded-md"
              readOnly
            />
            <span>of 100</span>
            <select className="border rounded-md px-2 py-1">
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </select>
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 100))}
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackUser;