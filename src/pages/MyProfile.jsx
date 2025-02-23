import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'toncharoenk@gmail.com',
    phone: '+66  65 456 7890',
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London"
    },
    gender: "Male",
    dob: '2003-07-27'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-4xl mt-2 mx-auto bg-white border-xl border-white  shadow-2xl rounded-lg overflow-hidden p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full" src={userData.image} alt="Profile" />
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border rounded-md mt-4"
            />
          ) : (
            <p className="text-xl font-semibold mt-4">{userData.name}</p>
          )}
        </div>
        
        <div>
          <p className="text-gray-700 font-bold">CONTACT INFORMATION</p>
          <div className="mt-2">
            <p>Email:</p>
            <p className="text-gray-600">{userData.email}</p>
            <p>Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md"
              />
            ) : (
              <p className="text-gray-600">{userData.phone}</p>
            )}
          </div>
          <p className="mt-4 text-gray-700 font-bold">ADDRESS</p>
          {isEdit ? (
            <div>
              <input
                type="text"
                value={userData.address.line1}
                onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                className="w-full px-3 py-2 border rounded-md mt-2"
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                className="w-full px-3 py-2 border rounded-md mt-2"
              />
            </div>
          ) : (
            <p className="text-gray-600">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
        
        <div>
          <p className="text-gray-700 font-bold">BASIC INFORMATION</p>
          <div className="mt-2">
            <p>Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-600">{userData.gender}</p>
            )}
            <p className="mt-4">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md"
              />
            ) : (
              <p className="text-gray-600">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6">{
         isEdit ?
            <button
              onClick={() => setIsEdit(false)}
              className="w-full px-4 py-2 border border-indigo-500   rounded-full hover:bg-indigo-500 hover:text-white transition-all cursor-pointer"
            >
              Save information 
              </button>
            :<button
              onClick={() => setIsEdit(true)}
              className="w-full px-4 py-2 border border-indigo-500  rounded-full hover:bg-indigo-500 hover:text-white transition-all  cursor-pointer"
            > Edit
              </button>
                      
          }
        </div>
    </div>
  );
};

export default MyProfile;
