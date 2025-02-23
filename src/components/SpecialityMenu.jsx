import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-16 text-gray-800' id='speciality'>
      <h1 className='text-4xl font-bold text-gray-ต00'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm font-medium text-gray-700'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free
      </p>
      <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto px-4 sm:px-0'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center text-xs cursor-pointer shrink-0 transition-all duration-500 transform hover:-translate-y-2'
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className='w-16 sm:w-24 mb-2 rounded-full shadow-md' src={item.image} alt={item.speciality} />
            <p className='text-gray-900 font-medium'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
