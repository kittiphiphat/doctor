import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Topdoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      <h1 className="text-4xl font-bold text-gray-900">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm font-medium text-gray-700">Simply browse through our extensive list of trusted doctors.</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 px-4 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointments/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-300 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
          >
            <img className="bg-blue-100 w-full object-cover" src={item.image} alt={item.name} />
            <div className="p-4 bg-white">
              <div className="flex items-center gap-2 text-sm font-bold text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-bold">{item.name}</p>
              <p className="text-gray-600 text-sm font-medium">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo(0, 0);
        }}
        className="bg-indigo-500 text-white font-medium px-12 py-3 rounded-full mt-10 hover:bg-indigo-600 hover:scale-105 transition-all duration-300"
      >
        More
      </button>
    </div>
  );
};

export default Topdoctors;
