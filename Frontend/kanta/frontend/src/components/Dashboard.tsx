import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCreateBooking = () => {
    navigate('/waste-type-selection');
  };

  if (!auth.token) {
    return <div>Please sign in first.</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Dashboard</h2>
        <p className="text-gray-700 mb-4">Welcome to Kanta, {auth.user?.fullName || auth.user?.companyName || auth.user?.institutionName}</p>
        <button onClick={handleCreateBooking} className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition duration-300 ease-in-out">
          Create Booking
        </button>
        <button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition duration-300 ease-in-out mt-4">
          Logout
        </button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
