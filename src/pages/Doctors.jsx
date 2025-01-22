import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    setFilterDoc(speciality ? doctors.filter(doc => doc.speciality === speciality) : doctors);
  }, [doctors, speciality]);

  return (
          <div>
          <p className='text-gray-600'> Browse through the doctors specialist</p>
              <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
                <div className=' flex flex-col gap-2 text-sm text-gray-700 font-medium'>
                    <p onClick={()=>speciality === 'General physician'? navigate('/doctors'): navigate('/doctors/General physician')}className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ?  "bg-indido-100  text-black":""}`}>General physician</p>
                    <p onClick={()=>speciality === 'Gynecologist'? navigate('/doctors'): navigate('/doctors/Gynecologist')}className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist<" ? "bg-indido-100 text-black":""}`}>Gynecologist</p>
                    <p onClick={()=>speciality === 'Dermatologist'? navigate('/doctors'): navigate('/doctors/Dermatologist')}className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indido-100 text-black":""}`}>Dermatologist</p>
                    <p onClick={()=>speciality === 'Pediatricians'? navigate('/doctors'): navigate('/doctors/Pediatricians')}className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indido-100 text-black":""}`}>Pediatricians</p>
                    <p onClick={()=>speciality === 'Neurologist'? navigate('/doctors'): navigate('/doctors/Neurologist')}className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indido-100 text-black":""}`}>Neurologist</p>
                    <p onClick={()=>speciality === 'Gastroenterologist'? navigate('/doctors'): navigate('/doctors/Gastroenterologist')}className={` w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist"? " bg-indido-100":""}`}>Gastroenterologist</p>
                </div>

              <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
                  {
                    filterDoc.map((item,index) =>(
                      <div onClick ={()=> navigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                          <img className='bg-blue-50'src={item.image} alt="" />
                          <div className='p-4' >
                              <div className='flex items-center gap-2 text-sm text-center font-bold text-green-500'>
                                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                              </div>
                              <p className='text-gray-900 text-lg font-bold'>{item.name}</p>
                              <p className='text-gray-600 text-sm font-medium '>{item.speciality}</p>
                          </div>
                      </div>
                  ))}
 
              </div>
        </div>
    </div>
  );
};

export default Doctors;
