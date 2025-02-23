import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <p className="text-3xl font-bold mb-6">My Appointments</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <img src={item.image} alt="" className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-6" />
              <div className="text-center md:text-left">
                <p className="text-2xl font-semibold">{item.name}</p>
                <p className="text-gray-600">{item.speciality}</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-800 font-medium">Address:</p>
              <p className="text-gray-600">{item.address.line1}</p>
              <p className="text-gray-600">{item.address.line2}</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-800 font-medium">Date & Time:</p>
              <p className="text-gray-600">25, July, 2024 | 8:30 PM</p>
            </div>
            <div className="flex justify-between">
              <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-transform transform hover:scale-105">Pay Online</button>
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;