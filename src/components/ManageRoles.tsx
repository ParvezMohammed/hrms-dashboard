import React, { useState } from 'react';
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface FormData {
  employeeType: string;
  name: string;
  designation: string;
  projectName: string;
  projectDeadline: string;
  note: string;
  teamMembers: string;
  attachedFile: File | null;
}

interface FormErrors {
  [key: string]: string;
}

const ManageRoles = () => {
  const [formData, setFormData] = useState<FormData>({
    employeeType: 'Senior Employee',
    name: '',
    designation: '',
    projectName: '',
    projectDeadline: '',
    note: '',
    teamMembers: '',
    attachedFile: null
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.employeeType) {
      newErrors.employeeType = 'Employee type is required';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }
    
    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required';
    }
    
    if (!formData.projectDeadline) {
      newErrors.projectDeadline = 'Project deadline is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        attachedFile: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      alert('Role updated successfully!');
    }
  };

  const handleReset = () => {
    setFormData({
      employeeType: 'Senior Employee',
      name: '',
      designation: '',
      projectName: '',
      projectDeadline: '',
      note: '',
      teamMembers: '',
      attachedFile: null
    });
    setErrors({});
  };

  return (
    <div className="flex-1 p-8 dark:bg-gray-900">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Manage User Roles</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill the required fields below to manage user roles.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        {/* Employee Type */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Employee Type
            </label>
            <select
              name="employeeType"
              value={formData.employeeType}
              onChange={handleInputChange}
              className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
            >
              <option value="Senior Employee">Senior Employee</option>
              <option value="Junior Employee">Junior Employee</option>
              <option value="Intern">Intern</option>
            </select>
            {errors.employeeType && <p className="mt-1 text-sm text-red-500">{errors.employeeType}</p>}
          </div>

          {/* Name and Designation */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Arpita Das"
                className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="UI/UX Designer Lead"
                className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              {errors.designation && <p className="mt-1 text-sm text-red-500">{errors.designation}</p>}
            </div>
          </div>

          {/* Project Name and Deadline */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                placeholder="HRM Software UI"
                className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              {errors.projectName && <p className="mt-1 text-sm text-red-500">{errors.projectName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Deadline
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="projectDeadline"
                  value={formData.projectDeadline}
                  onChange={handleInputChange}
                  placeholder="65 Days"
                  className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
                <span className="absolute right-3 top-2.5">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              {errors.projectDeadline && <p className="mt-1 text-sm text-red-500">{errors.projectDeadline}</p>}
            </div>
          </div>

          {/* Note */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Note
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Attach Project document (pdf, jpg, docx or any other format)
            </label>
            <div className="bg-blue-50 p-4 rounded-lg">
              <button
                type="button"
                onClick={() => document.getElementById('file-upload')?.click()}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Choose File
              </button>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Team Members */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Team Members/Interns
            </label>
            <select
              name="teamMembers"
              value={formData.teamMembers}
              onChange={handleInputChange}
              className="w-full p-2.5 bg-blue-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
            >
              <option value="">John Doe (Intern)</option>
              <option value="intern1">Sarah Smith (Intern)</option>
              <option value="intern2">Mike Johnson (Intern)</option>
            </select>
          </div>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-8 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-8 py-2.5 border border-red-500 text-red-500 dark:border-red-400 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageRoles; 