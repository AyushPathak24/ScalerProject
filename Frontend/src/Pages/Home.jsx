import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

const Home = ({ Toggle }) => {

    const [bookingdata, setBookingData] = useState([]);
    const [revenue, setRevenue] = useState(0);
    const [upcomingCount, setUpcomingCount] = useState(0);
    const [PassedCount, setPassedCount] = useState(0);
    const [cancelCount, setCancelCount] = useState(0);


    const getData = async () => {
        var tempRevenue = 0;
        var upcoming = 0;
        var passBooking = 0;
        var cancelBooking = 0; 
        const response = await fetch('http://localhost:3005', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        data.map((booking) => {
            tempRevenue += booking.price
        });

        data.map((booking) => {
            if (booking.status === 'upcoming') {
                upcoming += 1;
            }
        });

        data.map((booking) => {
            if (booking.status === 'passed') {
                passBooking += 1;
            }
        });
        data.map((booking) => {
            if (booking.status === 'cancel') {
                cancelBooking += 1;
            }
        });

        setRevenue(tempRevenue);
        setPassedCount(passBooking);
        setCancelCount(cancelBooking);
        setUpcomingCount(upcoming);
        setBookingData(data);
        
        console.log(data);
    }

    useEffect(() => {
       getData();
       setRevenue(0);
    }, []);

    
    const getTables = bookingdata.map((booking, index) => {
        return (<tr key={index}>
            <th scope="row">1</th>
            <td>{booking.email}</td>
            <td>{booking.startTime}</td>
            <td>{booking.endTime}</td>
            <td>{booking.roomType}</td>
            <td>{booking.price}</td>
            <td>
                <button type="button" class="btn btn-warning"><i className='bi bi-pencil'></i>     Edit</button>
            </td>
            <td><button type="button" class="btn btn-danger"><i className='bi bi-x-circle'>   Cancel</i></button></td>
        </tr>)
    });

    return (
        <div className='px-3'>
            <Navbar Toggle={Toggle} />
            <div className="container-fluid">
                <div className="row g-3  my-2">
                    <div className="col-md-3 p-1">
                        <div className="p-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <h3 className='fs-2'>{revenue}</h3>
                            <p className="fs-5">Revenue</p>
                            <i className="bi bi-currency-rupee p-3  fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3 p-1">
                        <div className="p-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <h3 className='fs-2'>{upcomingCount}</h3>
                            <p className="fs-5">Upcoming Bookings</p>
                            <i className="bi bi-graph-up-arrow p-3  fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3 p-1">
                        <div className="p-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <h3 className='fs-2'>{PassedCount}</h3>
                            <p className="fs-5">Passed Bookings</p>
                            <i className="bi bi-pass p-3  fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3 p-1">
                        <div className="p-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <h3 className='fs-2'>{cancelCount}</h3>
                            <p className="fs-5">Cancelled</p>
                            <i className="bi bi-x-lg p-3  fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-hover caption-top bg-white rounded">
                <caption className='text-white fs-4'>Recent Bookings</caption>
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Arrival</th>
                        <th scope="col">Departure</th>
                        <th scope='col'>Room Type</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Update</th>
                        <th scope='col'>Cancellations</th>
                    </tr>
                </thead>
                    <tbody>{getTables}</tbody>
            </table>

        </div>
    )
}

export default Home