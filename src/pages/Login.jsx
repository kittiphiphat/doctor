import React, { useState } from 'react'
import { use } from 'react'
import { LiaStethoscopeSolid } from "react-icons/lia";

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()


  }

  return (
    <form className=' min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-2xl '>
        <p class="flex items-center text-2xl font-semibold  ">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
          <LiaStethoscopeSolid className='h-7 w-7 ml-2' />
        </p>
        <p className='text-indigo-500 font-semibold'>Please {state === 'Sign Up' ? 'sign up' : "log in"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full  p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} />
          </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full  p-2 mt-1' type="text" onChange={(e) => setEmail(e.target.email)} value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full  p-2 mt-1' type="text" onChange={(e) => setPassword(e.target.password)} value={password} />
        </div>
        <button className='bg-indigo-500  text-white w-full py-2 rounded-md  text-base'>{state === 'Sign Up' ? 'Create Account' : "Login"}</button>
        {
          state === "Sign Up"
            ? <p >Already have an account? <span onClick={() => setState('Login')} className='text-indigo-500 underline  cursor-pointer  onclivk'>Login here</span></p>
            : <p > Create an new account? <span onClick={() => setState('Sign Up')} className='text-indigo-500 underline  cursor-pointer  onclivk'>click here</span></p>
        }



      </div>

    </form>
  )
}

export default Login
