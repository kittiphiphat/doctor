import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-100 py-10 md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*-------------left section-----------*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 font-medium'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero odit soluta maxime repellendus? Quas magni animi, nostrum autem quisquam ratione natus reprehenderit accusantium consequuntur praesentium provident deleniti aliquid amet! Cupiditate.
          </p>
        </div>

        {/*-------------center section-----------*/}
        <div>
          <p className='text-xl font-bold mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600 font-medium'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*-------------right section-----------*/}
        <div>
          <p className='text-xl font-bold mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 font-medium'>
            <li>+1-212-456-7890</li>
            <li>gratstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*--------- Copy right text ---------*/}
      <div className='border-t border-gray-300 pt-5'>
        <p className='text-sm text-center text-gray-600'>
          Copyright 2024 @ Prescripto - All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer