import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface SettingsFormData {
  notifications: {
    email: boolean;
    desktop: boolean;
    updates: boolean;
  };
  language: string;
  timezone: string;
  theme: 'light' | 'dark';
}

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState<SettingsFormData>({
    notifications: {
      email: true,
      desktop: true,
      updates: false,
    },
    language: 'English',
    timezone: 'UTC+05:30',
    theme: theme, // Initialize with current theme
  });

  const handleNotificationChange = (key: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Apply theme change only when saving
    setTheme(settings.theme);
    console.log('Settings saved:', settings);
    alert('Settings updated successfully!');
  };

  const handleCancel = () => {
    // Reset form to current settings
    setSettings(prev => ({
      ...prev,
      theme: theme
    }));
    window.location.reload();
  };

  return (
    <div className="flex-1 p-8 dark:bg-gray-900">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your preferences and account settings</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-8">
        {/* Notifications Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={() => handleNotificationChange('email')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.notifications.desktop}
                onChange={() => handleNotificationChange('desktop')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Desktop Notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.notifications.updates}
                onChange={() => handleNotificationChange('updates')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Updates and Announcements</span>
            </label>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Appearance</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Theme
              </label>
              <select
                name="theme"
                value={settings.theme}
                onChange={handleChange}
                className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
          </div>
        </div>

        {/* Regional Settings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Regional Settings</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Zone
            </label>
            <select
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
            >
              <option value="UTC+05:30">India (UTC+05:30)</option>
              <option value="UTC+00:00">London (UTC+00:00)</option>
              <option value="UTC-05:00">New York (UTC-05:00)</option>
              <option value="UTC-08:00">San Francisco (UTC-08:00)</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-8 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-8 py-2.5 border border-red-500 text-red-500 dark:border-red-400 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings; 