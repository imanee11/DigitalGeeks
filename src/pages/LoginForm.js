import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import { useNavigate } from 'react-router-dom';
import { Riple } from 'react-loading-indicators';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setMessage('All fields are required.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      setMessage(`Success: ${response.data.message}`);

      // ✅ Set login flag only after successful login
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("loginStatusChanged"));

      navigate('/');
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data.message : 'Server error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {isLoading ? (
                <Riple color="#ebf4f4" size="small" text="" textColor="" />
              ) : (
                'Login'
              )}
            </button>
          </form>
          {message && (
            <p className={`text-center mt-4 ${message.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
