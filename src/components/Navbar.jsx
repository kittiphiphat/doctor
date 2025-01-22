import React, { useState } from 'react'
import  {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {


    const navigate =useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token,setToken]= useState(true)


  return (
    <div className='flex items-center justify-between relative text-sm py-4 mb-5  border-none z-10'>
        <img onClick={()=>navigate('/')}className='w-44 cursor-pointer' src={assets.logo}alt=""/>

          <ul className="hidden md:flex items-center  gap-5 font-medium">
            {/* HOME */}
            <NavLink to="/" className="relative flex items-center gap-2">
                {({ isActive }) => (
                    <>
                        <li className={`py-1 ${isActive ? "" : ""} flex items-center`}>
                            HOME
                        </li>
                        {isActive && (
                            <hr className="absolute bottom-0 left-0 right-0 border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
                        )}
                    </>
                )}
            </NavLink>

            {/* ALL DOCTORS */}
            <NavLink to="/doctors" className="relative flex items-center gap-2">
                {({ isActive }) => (
                    <>
                        <li className={`py-1 ${isActive ? "" : ""} flex items-center`}>
                            All DOCTORS
                        </li>
                        {isActive && (
                            <hr className="absolute bottom-0 left-0 right-0 border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
                        )}
                    </>
                )}
            </NavLink>

            {/* ABOUT */}
            <NavLink to="/about" className="relative flex items-center gap-2">
                {({ isActive }) => (
                    <>
                        <li className={`py-1 ${isActive ? "" : ""} flex items-center`}>
                            ABOUT
                        </li>
                        {isActive && (
                            <hr className="absolute bottom-0 left-0 right-0 border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
                        )}
                    </>
                )}
            </NavLink>

            {/* CONTACT */}
            <NavLink to="/contact" className="relative flex items-center gap-2">
                {({ isActive }) => (
                    <>
                        <li className={`py-1 ${isActive ? "" : ""} flex items-center`}>
                            CONTACT
                        </li>
                        {isActive && (
                            <hr className="absolute bottom-0 left-0 right-0 border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
                        )}
                    </>
                )}
            </NavLink>
       </ul>


            <div className='flex items-center gap-4'>
                      {
                        token ? (
                            <div className="flex items-center gap-2 cursor-pointer group relative">

                            <img className="w-11 h-11 rounded-full" src={assets.profile_pic} alt="Profile" />
                            {/* ไอคอน dropdown */}
                            <img className="w-3" src={assets.dropdown_icon} alt="Dropdown Icon" />
                            {/* เมนูที่ซ่อนอยู่ */}
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                                <div className="min-w-[12rem] shadow-2xl bg-white text-black rounded flex flex-col gap-4 p-4 ">
                                <p onClick={()=>navigate('/my-profile')} className="hover:text-purple-700 cursor-pointer">My Profile</p>
                                <p onClick={()=>navigate('/my-appointments')}className="hover:text-purple-700 cursor-pointer">My Appointments</p>
                                <p onClick={()=>setToken(false)} className="hover:text-purple-700 cursor-pointer">Logout</p>
                                </div>
                            </div>
                            </div>
                        ) : (
                            <button
                            onClick={() => navigate('/login')}
                            className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-full"
                            >
                            Create account
                            </button>
                      )}                
            </div>
    </div>
  )
}

export default Navbar
