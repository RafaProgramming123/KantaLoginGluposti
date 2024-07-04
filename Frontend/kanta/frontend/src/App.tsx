import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import WasteTypeSelection from './components/WasteTypeSelection';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes> 
          <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/waste-type-selection" element={<WasteTypeSelection />} />
            <Route path="/booking-form/:wasteType" element={<BookingForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;