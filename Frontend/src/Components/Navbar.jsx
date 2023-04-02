import React from 'react'
import 'bootstrap/js/dist/dropdown'

const Navbar = ({Toggle}) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">FuddiHotel</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">All Bookings</a>
                        <a className="dropdown-item" href="#">Add Bookings</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar