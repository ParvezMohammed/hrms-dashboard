import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CreateAccount from './components/CreateAccount';
import ManageRoles from './components/ManageRoles';
import ResetPassword from './components/ResetPassword';
import ResetNewPassword from './components/ResetNewPassword';
import PasswordUpdate from './components/PasswordUpdate';
import TrackUser from './components/TrackUser';
import TrackProfile from './components/TrackProfile';
import Settings from './components/Settings';
import Notification from './components/Notification';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex w-full min-h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <main className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/manage-roles" element={<ManageRoles />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/reset-new-password" element={<ResetNewPassword />} />
              <Route path="/password-update" element={<PasswordUpdate />} />
              <Route path="/user-activity" element={<TrackUser />} />
              <Route path="/track-profile" element={<TrackProfile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notification" element={<Notification />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
