import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface FormData {
  employeeType: string;
  name: string;
  email: string;
  contactNo: string;
  dateOfJoining: string;
  permissions: {
    systemAccess: boolean;
    modulePermissions: boolean;
    dataAccess: boolean;
  };
}

interface FormErrors {
  [key: string]: string;
}

const CreateAccount = () => {
  const [formData, setFormData] = useState<FormData>({
    employeeType: 'Admin HR',
    name: '',
    email: '',
    contactNo: '',
    dateOfJoining: '',
    permissions: {
      systemAccess: false,
      modulePermissions: false,
      dataAccess: false,
    },
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNo.replace(/\D/g, ''))) {
      newErrors.contactNo = 'Contact number should be 10 digits';
    }
    
    if (!formData.dateOfJoining) {
      newErrors.dateOfJoining = 'Date of joining is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePermissionChange = (permission: keyof typeof formData.permissions) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      console.log('Permissions:', formData.permissions);
      // Add your form submission logic here
      alert('Account created successfully!');
    }
  };

  const handleReset = () => {
    setFormData({
      employeeType: 'Admin HR',
      name: '',
      email: '',
      contactNo: '',
      dateOfJoining: '',
      permissions: {
        systemAccess: false,
        modulePermissions: false,
        dataAccess: false,
      },
    });
    setErrors({});
  };

  return (
    <div className="flex-1 p-8 dark:bg-gray-900">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800  dark:text-white">Create New Account</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill the required fields below to create new account.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Employee Type
            </label>
            <select
              name="employeeType"
              value={formData.employeeType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-lg dark:bg-gray-700 dark:text-white"
            >
              <option value="Admin HR">Admin HR</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg dark:bg-gray-700 dark:text-white`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg dark:bg-gray-700 dark:text-white`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Contact No.
            </label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              placeholder="Enter contact number"
              className={`w-full p-2 border ${errors.contactNo ? 'border-red-500' : 'border-gray-200'} rounded-lg dark:bg-gray-700 dark:text-white`}
            />
            {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date of Joining
            </label>
            <div className="relative">
              <input
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleInputChange}
                className={`w-full p-2 border ${errors.dateOfJoining ? 'border-red-500' : 'border-gray-200'} rounded-lg dark:bg-gray-700 dark:text-white`}
              />
              <CalendarIcon className="w-5 h-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>
            {errors.dateOfJoining && <p className="text-red-500 text-sm mt-1">{errors.dateOfJoining}</p>}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Permissions</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* System Access */}
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">System Access</h3>
              <div className="space-y-3">
                {Object.entries(formData.permissions.systemAccess).map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handlePermissionChange('systemAccess')}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Module Permissions */}
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Module Permissions</h3>
              <div className="space-y-3">
                {Object.entries(formData.permissions.modulePermissions).map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handlePermissionChange('modulePermissions')}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Data Access */}
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Data Access</h3>
              <div className="space-y-3">
                {Object.entries(formData.permissions.dataAccess).map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handlePermissionChange('dataAccess')}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount; 