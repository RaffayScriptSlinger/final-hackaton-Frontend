import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the data object
    const formData = {
      cnic,
      email,
      name,
    };

    try {
      // Sending the data to the backend
      // Hello Raffay Sharjeel Rehan 
      // Mere sa nahe bana hackathon per ma jaldi bana lo gaa 
      const response = await axios.post('http://localhost:5000/api/submit', formData);
      if (response.status === 200) {
        setMessage('Form submitted successfully!');
        setCnic('');
        setEmail('');
        setName('');
      }
    } catch (error) {
      setMessage('Error submitting the form. Please try again!');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Apply for Education Loan</h2>

      {message && <p className="text-center text-sm text-green-600">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
            CNIC
          </label>
          <input
            type="text"
            id="cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter CNIC"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Name"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
