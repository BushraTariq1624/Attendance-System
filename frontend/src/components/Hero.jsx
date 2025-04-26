import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import React, { useEffect, useState, useContext } from "react";
import { CheckInContext } from '../Pages/CheckContext';

const Hero = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useSelector((state) => state.auth);
	const [user, setUser] = useState(null);
	const { checkInTime, checkOutTime } = useContext(CheckInContext);


	const handleLogin = () => {
		navigate('/login');
	};

	useEffect(() => {
		const fetchUserDetails = async () => {
			const token = localStorage.getItem("token");

			try {
				const response = await fetch("http://localhost:5000/api/auth/user/me", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});

				const data = await response.json();
				if (response.ok) {
					setUser(data.user);
					console.log(data.user);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		if (isAuthenticated) {
			fetchUserDetails();
		}
	}, [isAuthenticated]);

	return (
		<>
			{
				isAuthenticated ? (
					<section className="text-gray-800 bg-red-50 body-font">
						<div className="container px-5 py-24 mx-auto">
							<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
								<h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
									WELCOME TO OUR ATTENDANCE SYSTEM <br />
									{user?"":"Go To Profile And Fill Info To Get Further Details"}
								</h1>
							</div>
							<div>
								<p className='text-2xl'>{user ? `Hello, ${user.name}` : ""}</p>
							</div>
							<div>
								<p className='text-2xl'>{user ? ` ${user.email}` : ""}</p>
							</div>
							<div>
								<p className='text-2xl'>{user ? `${user.gender}` : ""}</p>
							</div>
							<div>
								<p className='text-2xl'>{user ? "Salary:50000" : ""}</p>
							</div>
							<div>
								<p className='text-2xl'>{user ? "No leave Allowed" : ""}</p>
							</div>
							<div>
								<p className='text-2xl'>{user ? `YOUR CHECK-IN TIME:  ${checkInTime || 'Not checked in yet'}` : ""}</p>
							</div>
							<div>
								<p className='text-2xl'>{user ? `YOUR CHECK-OUT TIME:  ${checkOutTime || 'Not checked out yet'}` : ""}</p>
							</div>
						</div>
					</section >
				) : (
					<section className="text-gray-600 bg-red-50 body-font">
						<div className="container px-5 py-24 mx-auto">
							<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
								<h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
									WELCOME TO OUR ATTENDANCE SYSTEM
									<div>Please login to Mark Your Attendance and See your status and More Details</div>
								</h1>
								<button className="flex-shrink-0 text-white bg-emerald-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg mt-10 sm:mt-0" onClick={handleLogin}>
									Login
								</button>
							</div>
						</div>
					</section>
				)
			}
		</>
	);
};

export default Hero;
