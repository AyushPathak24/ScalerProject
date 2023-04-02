import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBooking = () => {

	const [form, setForm] = useState({});
	const navigate = useNavigate();

	const handleForm = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setForm({
			...form,
			[e.target.name] : e.target.value
		});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3005/create', {
			method: 'POST',
			body:JSON.stringify(form),
			headers: {
				'Content-Type':'application/json'
			}
		});
		const result = await response.json();
		console.log(result);
	}
  return (
	<div>
		<h1>Booking</h1>
		<form onSubmit={handleSubmit}>
			{/* <p>{JSON.stringify(form)}</p> */}
			<span>email</span>
			<input type='email' name='email' onChange={handleForm} ></input>
			<span>Arrival</span>
			<input type='date' name='startTime' onChange={handleForm}></input>
			<span>departure</span>
			<input type='date' name='endTime' onChange={handleForm}></input>
			<span>roomNo</span>
			<input type='number' name='roomNo' onChange={handleForm}></input>
			<span>status</span>
			<input type='text' name='status' onChange={handleForm}></input>
			<span>Room Type</span>
			<input type='text' name='roomType' onChange={handleForm}></input>
			<span>price</span>
			<input type='number' name='price' onChange={handleForm}></input>
			<input type='submit' onClick={()=>navigate("/")}></input>
		</form>
	</div>
  )
}

export default AddBooking