import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { NavLink } from 'react-router-dom';
// import { addDishes, moveSlides } from './actions'
import './App.css';
import logo from './images/download.png'

const SignIn = () => {
    return (
        <div>
            <main id="main_container" role="main">
                <div data-reactid=".0">
                    <div
                        className="view-container sessions new"
                        data-reactid=".0.0">
                        <main data-reactid=".0.0.0">
                            <header data-reactid=".0.0.0.0">
                                <img className="logo" data-reactid=".0.0.0.0.0" src={logo}/>
                            </header>
                            <form id="sign_in_form" data-reactid=".0.0.0.1">
                                <div className="field" data-reactid=".0.0.0.1.1">
                                    <input
                                        type="Email"
                                        id="user_email"
                                        placeholder="Email"
                                        required
                                        defaultValue="john@phoenix-trello.com"
                                        data-reactid=".0.0.0.1.1.0" />
                                </div>
                                <div className="field" data-reactid=".0.0.0.1.2">
                                    <input
                                        type="password"
                                        id="user_password"
                                        placeholder="Password"
                                        required
                                        defaultValue={12345678}
                                        data-reactid=".0.0.0.1.2.0" />
                                </div>
                                <button>
                                <NavLink type="submit" data-reactid=".0.0.0.1.3" to="/boards">
                                    Sign in
</NavLink>
</button>
                            </form>
                            <a href="/SignUp" data-reactid=".0.0.0.2">
                                Create new account
</a>
                        </main>
                    </div>
                </div>
            </main>
            <footer id="main_footer">
                <small>
                    <a href="https://trello.com/" target="_blank">Trello</a> tribute for educational purposes
            crafted with ♥ for <a href="https://diacode.com/">Diacode</a>
                    by <a href="https://twitter.com/bigardone">@bigardone</a>
                </small>
            </footer>
        </div>
    )
}


export default SignIn;