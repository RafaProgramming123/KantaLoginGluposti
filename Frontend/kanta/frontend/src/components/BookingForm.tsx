import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { createBooking } from '../slices/bookingSlice';

interface BookingFormData {
  wasteTypeName: string | undefined;
  quantity: string;
  date: string;
  priority: boolean;
  subTypes: string[];
}

const BookingForm: React.FC = () => {
  const { wasteType } = useParams<{ wasteType: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingFormData>({
    wasteTypeName: wasteType,
    quantity: '',
    date: '',
    priority: false,
    subTypes: []
  });

  const subTypeOptions: { [key: string]: string[] } = {
    Plastic: ['NIKOLS', 'HDPE', 'PVC'],
    Paper: ['Office Paper', 'Newspaper'],
    Textile: ['Cotton', 'Polyester'],
    Glass: ['Bottle', 'Window'],
    'EE Waste': ['Battery', 'Circuit Board']
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubTypeChange = (subType: string) => {
    setFormData((prevData) => ({
      ...prevData,
      subTypes: prevData.subTypes.includes(subType)
        ? prevData.subTypes.filter((s) => s !== subType)
        : [...prevData.subTypes, subType]
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createBooking(formData));
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-4">Booking Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Priority</label>
          <input
            type="checkbox"
            name="priority"
            checked={formData.priority}
            onChange={handleChange}
            className="text-green-500 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">SubTypes</label>
          <div className="grid grid-cols-2 gap-2">
            {subTypeOptions[wasteType || ''].map((subType) => (
              <label key={subType} className="flex items-center">
                <input
                  type="checkbox"
                  value={subType}
                  checked={formData.subTypes.includes(subType)}
                  onChange={() => handleSubTypeChange(subType)}
                  className="text-green-500 focus:ring-green-500"
                />
                <span className="ml-2 text-gray-700">{subType}</span>
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition duration-300 ease-in-out">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
