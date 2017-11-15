import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { NavLink, Link } from 'react-router-dom';
// import { addDishes, moveSlides } from './actions'
import './App.css';
import logo from './images/download.png'

const SignUp = () => {
    return (
        <main id="main_container" role="main">
            <div data-reactid=".0">
                <div
                    className="view-container registrations new"
                    data-reactid=".0.0">
                    <main data-reactid=".0.0.0">
                        <header data-reactid=".0.0.0.0">
                            <img src={logo} />
                        </header>
                        <form id="sign_up_form" data-reactid=".0.0.0.1">
                            <div className="field" data-reactid=".0.0.0.1.0">
                                <input
                                    id="user_first_name"
                                    type="text"
                                    placeholder="First name"
                                    required
                                    data-reactid=".0.0.0.1.0.0" />
                            </div>
                            <div className="field" data-reactid=".0.0.0.1.1">
                                <input
                                    id="user_last_name"
                                    type="text"
                                    placeholder="Last name"
                                    required
                                    data-reactid=".0.0.0.1.1.0" />
                            </div>
                            <div className="field" data-reactid=".0.0.0.1.2">
                                <input
                                    id="user_email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    data-reactid=".0.0.0.1.2.0" />
                            </div>
                            <div className="field" data-reactid=".0.0.0.1.3">
                                <input
                                    id="user_password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    data-reactid=".0.0.0.1.3.0" />
                            </div>
                            <div className="field" data-reactid=".0.0.0.1.4">
                                <input
                                    id="user_password_confirmation"
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                    data-reactid=".0.0.0.1.4.0" />
                            </div>
                            <button type="submit" data-reactid=".0.0.0.1.5">
                                Sign up
        </button>
                        </form>
                        <NavLink to="/signin" data-reactid=".0.0.0.2">
                            Sign in
        </NavLink>
                    </main>
                </div>
            </div>
        </main>

    )
}


export default SignUp;