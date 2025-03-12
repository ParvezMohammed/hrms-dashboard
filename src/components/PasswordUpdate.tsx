import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MdCelebration } from "react-icons/md";

const PasswordUpdate = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen">
      <Navbar heading="" />

      {/* Work Management Heading */}
      <h3 className="text-xl font-semibold flex items-center">
        <span className="flex items-center gap-1">
          <FaBookOpen />
          Work Management
        </span>
      </h3>

      {/* Tabs Navigation */}
      <div className="flex space-x-4 mt-4 mb-6">
        {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map((tab) => (
          <div
            key={tab}
            className="px-6 py-3 bg-white text-gray-700 rounded-xl shadow-md text-sm font-semibold cursor-default"
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Password Update Confirmation Section */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4 text-center">
          Your password has been <br /> successfully reset!
        </h2>

        <div className="bg-blue-100 w-full max-w-md p-8 rounded-2xl flex flex-col items-center shadow-md">
          <MdCelebration className="text-4xl "/>
          <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
            Password Update Successfully
          </h3>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Your password has been updated successfully
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-gray-700 border px-6 py-2 rounded-md font-medium hover:bg-gray-100"
          >
            Back to Login
          </button>
        </div>

        <button
          disabled
          className="mt-6 bg-blue-100 text-gray-400 px-6 py-2 rounded-full text-sm font-semibold cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdate;

// import React from "react";
// import { FaBookOpen } from "react-icons/fa";
// import { Navbar } from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const PasswordUpdate = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="p-6 min-h-screen">
//       <Navbar heading="" />

//       {/* Work Management Heading */}
//       <h3 className="text-xl font-semibold flex items-center">
//         <span className="flex items-center gap-1">
//           <FaBookOpen />
//           Work Management
//         </span>
//       </h3>

//       {/* Tabs Navigation */}
//       <div className="flex space-x-4 mt-4 mb-6">
//         {["Create User Accounts", "Manage Roles", "Track User", "Reset Password"].map((tab) => (
//           <div
//             key={tab}
//             className={`px-6 py-3 bg-white text-gray-700 rounded-xl shadow-md text-sm font-semibold cursor-default`}
//           >
//             {tab}
//           </div>
//         ))}
//       </div>

//       {/* Password Update Confirmation Section */}
//       <div className="flex flex-col items-center justify-center mt-20">
//         <h2 className="text-2xl font-semibold text-gray-600 mb-4 text-center">
//           Your password has been <br /> successfully reset!
//         </h2>

//         <div className="bg-blue-100 w-full max-w-md p-8 rounded-2xl flex flex-col items-center shadow-md">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4213/4213964.png"
//             alt="Success Icon"
//             className="w-16 h-16 mb-4"
//           />
//           <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
//             Password Update Successfully
//           </h3>
//           <p className="text-sm text-gray-500 mb-6 text-center">
//             Your password has been updated successfully
//           </p>
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-white text-gray-700 border px-6 py-2 rounded-md font-medium hover:bg-gray-100"
//           >
//             Back to Login
//           </button>
//         </div>

//         <button
//           disabled
//           className="mt-6 bg-blue-100 text-gray-400 px-6 py-2 rounded-full text-sm font-semibold cursor-not-allowed"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PasswordUpdate;