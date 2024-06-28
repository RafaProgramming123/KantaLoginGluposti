import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { signUp } from '../slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    type: 'person',  // Set default type to 'Physical Person'
    fullName: '',
    surname: '',
    email: '',
    password: '',
    telephoneNumber: '',
    location: '',
    taxNumber: ''
  });

  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, type: 'person' }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeChange = (type: string) => {
    setFormData({ ...formData, type });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signUp(formData)).then(() => {
      navigate('/signin');
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Type</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="person"
                checked={formData.type === 'person'}
                onChange={() => handleTypeChange('person')}
                className="text-green-500 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">Physical Person</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="company"
                checked={formData.type === 'company'}
                onChange={() => handleTypeChange('company')}
                className="text-green-500 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">Company</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="institution"
                checked={formData.type === 'institution'}
                onChange={() => handleTypeChange('institution')}
                className="text-green-500 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">Institution</span>
            </label>
          </div>
        </div>
        <motion.div
          key={formData.type}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          {formData.type === 'person' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Surname</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Telephone Number</label>
                  <input
                    type="text"
                    name="telephoneNumber"
                    value={formData.telephoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </>
          )}
          {formData.type === 'company' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Tax Number</label>
                  <input
                    type="text"
                    name="taxNumber"
                    value={formData.taxNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Telephone Number</label>
                  <input
                    type="text"
                    name="telephoneNumber"
                    value={formData.telephoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </>
          )}
          {formData.type === 'institution' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Institution Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </>
          )}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition duration-300 ease-in-out">
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <Link to="/signin" className="text-green-500 hover:text-green-600">
            Already have an account? Sign In
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default SignUp;
