import React from 'react'

const table = (bookingdata) => {

    const getTables = bookingdata.map((booking, index) => {
        <tr key={index}>
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
        </tr>
    });
    
    return (
        <div>
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

export default table