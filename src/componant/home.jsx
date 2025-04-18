import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
                if (!loggedInUser || !loggedInUser.email) {
                    throw new Error("User not logged in!");
                }

                const response = await fetch("http://localhost:3000/sign-up/user");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                const matchedUser = data.get_user?.find(u => u.email === loggedInUser.email);
                setUser(matchedUser);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand ms-4" href="#">Nimap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ms-5 me-5">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item active ms-5">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item active ms-5">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item active ms-5">
                            {/* <a className="nav-link" href="#">Projects</a> */}
                            <Link to="/order" className="btn btn-info btn-sm">Order</Link>
                        </li>
                    </ul>
                    <form className="d-flex justify-content-end" role="search">
                        <input className="form-control me-2 form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
                    </form>
                    <div className="d-flex justify-content-end ms-5">
                        <Link to="/login" className="btn btn-info btn-sm">Login</Link>
                    
                    </div>
                    {!loading && !error && user && (
                    <div className="ms-5">
                         <i className='ms-3'><FaUser size={20} /></i>
                        <p ><strong> {user.name}</strong> </p>
                    </div>
                )}
                    <div className="ms-5">

                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mt-4">
              
                <p>This is the home page of your React application.</p>

                <h2>User Info</h2>

                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}

               

                {!loading && !error && !user && (
                    <p>No user data found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
