import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditBooking = () => {

	const [formData, setFormData] = useState({});
	const navigate = useNavigate();

	const handleForm = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3005/edit/', {
			method: 'PUT',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(() => navigate('/'))
		const result = await response.json();
		console.log(result);
	}
	return (
		<div>
			<h1>Booking</h1>
			<div className="container">
			<p>{JSON.stringify(formData)}</p>
				<form onSubmit={handleSubmit}>
				<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input class="form-control" type="text" placeholder={`${id}`} readonly />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={handleForm} />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Arrival</label>
						<input type="date" className="form-control" id="exampleInputPassword1" name='startTime' placeholder="Arrival Time" onChange={handleForm} />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Departure</label>
						<input type="date" name='endTime' className="form-control" id="exampleInputPassword1" placeholder="Departure Time" onChange={handleForm} />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Room No</label>
						<input type="number" className="form-control" id="exampleInputPassword1" name='roomNo' placeholder="Room No" onChange={handleForm}/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Status</label>
						<input type="text" className="form-control" id="exampleInputPassword1" name='status' placeholder="Status" onChange={handleForm}/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Room Type</label>
						<input type="text" className="form-control" id="exampleInputPassword1" name='roomType' placeholder="Room Type" onChange={handleForm} />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Price</label>
						<input type="number" name='price' className="form-control" id="exampleInputPassword1" placeholder="Price" onChange={handleForm}/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default EditBooking