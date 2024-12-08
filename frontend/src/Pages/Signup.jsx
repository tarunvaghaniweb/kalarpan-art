import React, { useState } from 'react';
import icon from "../Image/icon.png";
import '../../src/css/login.css';

const Signup = () => {
    const [navbarColor, setNavbarColor] = useState("transparent");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.username) newErrors.username = "Username is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Confirm password is required.";
        if (formData.password && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{
                    backgroundColor: navbarColor,
                    transition: "background-color 0.5s ease",
                }}
            >
                <div className="container">
                    <div className="img" style={{ height: "80px", width: "220px" }}>
                        <img src={icon}  alt="Logo" style={{ height: "100%", width: "100%" }} />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto text-uppercase fw-bold justify-content-center w-100">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Home
                                </a>
                            </li>
                            
                        </ul>
                        <div className="text-center d-flex">
                            <a href="/Login1">
                                <button className="btn btn-hover-effect me-2">Login</button>
                            </a>
                            <a href="/Signup">
                                <button className="btn btn-hover-effect">Sign Up</button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='signup'>
                <div className="container" id='container'>
                    <h1>Get Started</h1>
                    <form id="form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                        )}

                        <div className="toggle-password">
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label htmlFor="showPassword">Show Password</label>
                        </div>

                        <button id='button' type="submit">Sign Up</button>
                    </form>
                    <div className="footer">
                        Already have an account? <a href="/Login1">Log In</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signup;




