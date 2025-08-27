import React, { useState, useEffect } from 'react';

// The base URL for the API will be loaded from the environment variables.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Fetch employees when the component mounts
  useEffect(() => {
    const fetchEmployees = async () => {
      if (!API_BASE_URL) {
        setError("API URL is not configured. Please check your .env file.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/employees`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError('Failed to fetch employees');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newEmployee = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // If using authentication, you'd add your token here:
          // 'Authorization': `Bearer ${yourAuthToken}`
        },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        throw new Error('Failed to add employee');
      }

      const addedEmployee = await response.json();
      setEmployees(prevEmployees => [...prevEmployees, addedEmployee]);
      
      // Clear form fields
      setFirstName('');
      setLastName('');
      setPhoneNumber('');

    } catch (err) {
      console.error("Failed to add employee:", err);
      // Here you might set an error message for the user
    }
  };

  if (isLoading) {
    return <div>Loading employees...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>

      {/* Add Employee Form */}
      <div className="mb-8 p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Add New Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Employee
          </button>
        </form>
      </div>

      {/* Employee List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Employee List</h2>
        <div className="bg-white shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200">
            {employees.length > 0 ? (
              employees.map(employee => (
                <li key={employee.id} className="px-4 py-4">
                  <p className="text-lg font-medium text-gray-900">{employee.first_name} {employee.last_name}</p>
                  <p className="text-sm text-gray-500">{employee.phone_number}</p>
                </li>
              ))
            ) : (
              <li className="px-4 py-4 text-center text-gray-500">No employees found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Employees;
