import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home';
import AddBooking from './Components/AddBooking';
import EditBooking from './Components/EditBooking';


const App = () => {



  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className="row">
        {toggle && <div className="col-2 bg-white vh-100">
          <Sidebar />
        </div>}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div className='col p-0'>
              <Home Toggle={Toggle} />
            </div>} exact />
            <Route path='/create' element={<div className='col p-0'>
              <AddBooking />
            </div>} />
            <Route path='/edit/:id' element={<div className='col p-0'>
              <EditBooking />
            </div>} />
          </Routes>
        </BrowserRouter>


        {/* <Router>
          <Routes>
            <Route exact path='/' element={<Home Toggle={Toggle} />} />
            <Route path='/create' element={<AddBooking />} />
          </Routes>
        </Router> */}
      </div>

    </div>
  )
}

export default App