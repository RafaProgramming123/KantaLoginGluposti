import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { AppDispatch } from '../redux/store';
import { loginAdmin } from '../slices/adminSlice';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginAdmin({ username, password })).unwrap();
      navigate('/admin');
    } catch {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition duration-300 ease-in-out">
          Login
        </button>
      </motion.form>
    </div>
  );
};

export default AdminLogin;