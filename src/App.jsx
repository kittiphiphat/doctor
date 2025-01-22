import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppnintments from './pages/MyAppnintments'
import Appnintments from './pages/Appnintments'
import Navbar from './components/navbar'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element= {<Home></Home>} />
        <Route path='/doctors' element= {<Doctors></Doctors>} />
        <Route path='/doctors/:speciality' element= {<Doctors></Doctors>} />
        <Route path='/login' element= {<Login></Login>} />
        <Route path='/about' element= {<About></About>} />
        <Route path='/contact' element= {<Contact></Contact>} />
        <Route path='/my-profile' element= {<MyProfile></MyProfile>} />
        <Route path='/my-appointments' element= {<MyAppnintments></MyAppnintments>} />
        <Route path='/appointments/:docId' element= {<Appnintments></Appnintments>} />
      </Routes>
          
       <Footer/>   
    </div>
  )
}

export default App
