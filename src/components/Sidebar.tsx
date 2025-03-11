import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChartBarIcon,
  UserPlusIcon,
  UserGroupIcon,
  UserIcon,
  KeyIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon, text, active, onClick }: SidebarItemProps) => (
  <div 
    onClick={onClick}
    className={`flex items-center space-x-3 px-4 py-3 cursor-pointer rounded-lg transition-colors duration-200 ${
      active ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
    {icon}
    <span className={`${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'} font-medium`}>{text}</span>
  </div>
);

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#d3e2f1] dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">H</span>
          </div>
          <span className="text-xl font-semibold text-gray-800 dark:text-white">HRMS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 space-y-1">
        <Link
          to="/"
          className={`flex items-center space-x-3 px-6 py-3 ${
            isActive('/') 
              ? 'bg-blue-50 dark:bg-blue-900/50 border-r-4 border-blue-500' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <ChartBarIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/create-account"
          className={`flex items-center space-x-3 px-6 py-3 ${
            isActive('/create-account') 
              ? 'bg-blue-50 dark:bg-blue-900/50 border-r-4 border-blue-500' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <UserPlusIcon className="w-5 h-5" />
          <span>Create Accounts</span>
        </Link>

        <Link
          to="/manage-roles"
          className={`flex items-center space-x-3 px-6 py-3 ${
            isActive('/manage-roles') 
              ? 'bg-blue-50 dark:bg-blue-900/50 border-r-4 border-blue-500' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <UserGroupIcon className="w-5 h-5" />
          <span>Manage Roles</span>
        </Link>

        <Link
          to="/reset-password"
          className={`flex items-center space-x-3 px-6 py-3 ${
            isActive('/reset-password') 
              ? 'bg-blue-50 dark:bg-blue-900/50 border-r-4 border-blue-500' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <KeyIcon className="w-5 h-5" />
          <span>Reset Password</span>
        </Link>

        <Link
          to="/user-activity"
          className={`flex items-center space-x-3 px-6 py-3 ${
            isActive('/user-activity') 
              ? 'bg-blue-50 dark:bg-blue-900/50 border-r-4 border-blue-500' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <ClipboardDocumentListIcon className="w-5 h-5" />
          <span>User Activity & Logs</span>
        </Link>

        <Link
          to="/settings"
          className={`flex items-center space-x-3 px-6 py-3 ${
            isActive('/settings') 
              ? 'bg-blue-50 dark:bg-blue-900/50 border-r-4 border-blue-500' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <Cog6ToothIcon className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar; 