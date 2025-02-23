import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setShowMobileMenu(false);
  };

  return (
    <div className="flex items-center justify-between py-4 mb-5 border-b border-gray-200 bg-white shadow-md">
      <img
        onClick={() => navigate('/')}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        <NavLink to="/" className="relative flex items-center gap-2">
          {({ isActive }) => (
            <>
              <li className={`py-1 ${isActive ? 'text-indigo-600' : ''} flex items-center`}>
                HOME
              </li>
              {isActive && (
                <hr className="absolute bottom-0 left-0 right-0 border-none h-0.5 bg-indigo-600 w-3/5 m-auto" />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/doctors" className="relative flex items-center gap-2">
          {({ isActive }) => (
            <>
              <li className={`py-1 ${isActive ? 'text-indigo-600' : ''} flex items-center`}>
                ALL DOCTORS
              </li>
              {isActive && (
                <hr className="absolute bottom-0 left-0 right-0 border-none h-0.5 bg-indigo-600 w-3/5 m-auto" />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="relative flex items-center gap-2">
          {({ isActive }) => (
            <>
              <li className={`py-1 ${isActive ? 'text-indigo-600' : ''} flex items-center`}>
                ABOUT
              </li>
              {isActive && (
                <hr className="absolute bottom-0 left-0 right-0 border-none h-0.5 bg-indigo-600 w-3/5 m-auto" />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="relative flex items-center gap-2">
          {({ isActive }) => (
            <>
              <li className={`py-1 ${isActive ? 'text-indigo-600' : ''} flex items-center`}>
                CONTACT
              </li>
              {isActive && (
                <hr className="absolute bottom-0 left-0 right-0 border-none h-0.5 bg-indigo-600 w-3/5 m-auto" />
              )}
            </>
          )}
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                className="w-11 h-11 rounded-full"
                src={assets.profile_pic}
                alt="Profile"
              />

            </div>
            {showDropdown && (
              <div className="absolute top-14 right-0 text-base font-medium text-gray-600 z-20">
                <div className="min-w-[12rem] shadow-2xl bg-white text-black rounded-md flex flex-col gap-4 p-4">
                  <p
                    onClick={() => {
                      navigate('/my-profile');
                      setShowDropdown(false);
                    }}
                    className="hover:text-indigo-600 cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate('/my-appointments');
                      setShowDropdown(false);
                    }}
                    className="hover:text-indigo-600 cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      setShowDropdown(false);
                    }}
                    className="hover:text-indigo-600 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full"
          >
            Create account
          </button>
        )}
        <img onClick={() => setShowMobileMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="Menu Icon" />
      </div>

      {showMobileMenu && (
        <div className="fixed inset-0 z-20">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowMobileMenu(false)}></div>
          <div className="fixed right-0 top-0 bottom-0 w-3/4 bg-white p-6 shadow-lg transition-transform transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}">
            <div className="flex justify-between items-center mb-6">
              <img src={assets.logo} alt="Logo" className="w-24" />
              <img onClick={() => setShowMobileMenu(false)} className="w-6 cursor-pointer" src={assets.cross_icon} alt="Close Icon" />
            </div>
            <ul className="flex flex-col gap-4">
            <NavLink
                to="/"
                className={`text-lg font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeMenu === 'home' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('home')}
            >
                Home
            </NavLink>
            <NavLink
                to="/doctors"
                className={`text-lg font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeMenu === 'doctors' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('doctors')}
            >
                All Doctors
            </NavLink>
            <NavLink
                to="/about"
                className={`text-lg font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeMenu === 'about' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('about')}
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={`text-lg font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeMenu === 'contact' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('contact')}
            >
                Contact
            </NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


