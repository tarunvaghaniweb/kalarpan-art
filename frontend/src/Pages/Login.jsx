import React, { useState } from "react";
import "../../src/css/login.css";
import icon from "../Image/icon.png";

const Login = () => {
    const [navbarColor, setNavbarColor] = useState("transparent");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert("Login successful!");
            // Add login logic here
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
                            <a href="/Login">
                                <button className="btn btn-hover-effect me-2">Login</button>
                            </a>
                            <a href="/Signup">
                                <button className="btn btn-hover-effect">Sign Up</button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="signup">
                <div className="container" id="container">
                    <h1>Login</h1>
                    <form id="form" onSubmit={handleSubmit}>
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

                        <div className="toggle-password">
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label htmlFor="showPassword">Show Password</label>
                        </div>

                        <button id="button" type="submit">Log In</button>
                    </form>
                    <div className="footer">
                        Don't have an account? <a href="/Signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
