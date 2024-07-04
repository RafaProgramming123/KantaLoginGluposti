// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { createBooking } from '../slices/bookingSlice'; // Update with actual import
// import { AppDispatch, RootState } from '../redux/store';

// const WasteTypeSelection: React.FC = () => {
//   const [selectedType, setSelectedType] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch<AppDispatch>();
//   const token = useSelector((state: RootState) => state.auth.token);

//   const handleTypeChange = (type: string) => {
//     setSelectedType(type);
//     navigate(`/booking-form/${type}`); // Navigate to the booking form with the selected type
//   };

//   if (!selectedType) {
//     return (
//       <div className="waste-type-selection bg-green-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl mb-4">Select Waste Type</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => handleTypeChange('Plastic')}>Plastic</button>
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => handleTypeChange('Paper')}>Paper</button>
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => handleTypeChange('Textile')}>Textile</button>
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => handleTypeChange('Glass')}>Glass</button>
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => handleTypeChange('EE Waste')}>EE Waste</button>
//         </div>
//       </div>
//     );
//   }

//   return null; // Since navigation happens, this component won't render after selecting a type
// };

// export default WasteTypeSelection;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

const WasteTypeSelection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    navigate(`/booking-form/${type}`); // Navigate to the booking form with the selected type
  };

  if (!selectedType) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-4">Select Waste Type</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleTypeChange('Plastic')}
            >
              Plastic
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleTypeChange('Paper')}
            >
              Paper
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleTypeChange('Textile')}
            >
              Textile
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleTypeChange('Glass')}
            >
              Glass
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => handleTypeChange('EE Waste')}
            >
              EE Waste
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null; // Since navigation happens, this component won't render after selecting a type
};

export default WasteTypeSelection;