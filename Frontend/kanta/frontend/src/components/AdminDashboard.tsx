import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchUsers, selectAdmin } from '../slices/adminSlice';
import { motion } from 'framer-motion';
import { User } from '../interface/types';

const AdminDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const admin = useSelector(selectAdmin);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Number of users to display per page

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  const getUserName = (user: User) => {
    if ('fullName' in user) return user.fullName;
    if ('companyName' in user) return user.companyName;
    if ('institutionName' in user) return user.institutionName;
    return '';
  };

  const getUserContact = (user: User) => {
    if ('telephoneNumber' in user) return user.telephoneNumber;
    if ('number' in user) return user.number;
    return '';
  };

  // Pagination calculations
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = admin.users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(admin.users.length / usersPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-green-600 mb-6 text-center">Admin Dashboard</h2>
        <button
          onClick={handleFetchUsers}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg mb-4 transition duration-300 ease-in-out"
        >
          See Users
        </button>
        {admin.status === 'loading' && <p className="text-center">Loading...</p>}
        {admin.status === 'succeeded' && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">ID</th>
                  <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200">Full Name / Company Name / Institution Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">Telephone / Number</th>
                  <th className="py-2 px-4 border-b border-gray-200">Location</th>
                  <th className="py-2 px-4 border-b border-gray-200">Role</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{getUserName(user)}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{getUserContact(user)}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{user.location}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {'fullName' in user ? 'Physical Person' : 'companyName' in user ? 'Company' : 'Institution'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {admin.status === 'failed' && <p className="text-red-500 mt-4 text-center">{admin.error}</p>}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
