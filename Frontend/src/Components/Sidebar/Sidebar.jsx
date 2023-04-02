import React from 'react'
import './style.css';

const Sidebar = () => {
    return (
        <div className='bg-white sidebar '>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-2'>Hotel</span>
            </div>
            <hr className='text-dark'/>
            <div className="list-group list-group-flush">
                <a className='list-group-item py-2 my-1'>
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span className='fs-5'>Dashboard</span>
                </a>
                <a className='list-group-item py-2 my-1'>
                    <i className="bi-plus-circle fs-4 me-3"></i>
                    <span className='fs-5'>Add Booking</span>
                </a>

            </div>

        </div>

    )
}

export default Sidebar