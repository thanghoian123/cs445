import React, { useState } from 'react';
import './style.css';
import imgUrl from '../signupUrl.jpg';

function Signup(props) {
    const [userSign, setUserSign] = useState({
        "email": "",
        "username": "",
        "passWord": "",
        "passwordConfirmation": ""
    });
    const onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserSign({ ...userSign, [name]: value });

    }

    const onHandleSubmit = e => {
        e.preventDefault();
        if (userSign.passWord != userSign.passwordConfirmation) {
            alert('mat khau khong trung');
            return;
        }

        var axios = require('axios');
        var data = JSON.stringify({ "username": `${userSign.userName}`, "email": `${userSign.email}`, "password": `${userSign.passWord}`, "roles": ["ROLE_USER"] });

        var config = {
            method: 'post',
            url: 'https://api-doan.herokuapp.com/api/v1/auth/signup',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                alert(JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const onSignup = () => {

        console.log(userSign);

    }

    return (
        <div className="contain-all">
            <div className="signup-box">
                <div className="img-box">
                    <img src={imgUrl} alt="" />
                    <a href="">i am already member</a>
                </div>
                <div className="signup-form">
                    <h2 className="sign-title">Sign up</h2>
                    <form onSubmit={onHandleSubmit}>
                        <div className="form-group">
                            <label><i className="fas fa-user"></i></label>
                            <input onChange={onHandleChange} id="my-input" className=" custom-input" type="text" name="username" placeholder="User Name" />
                        </div>
                        <div className="form-group">
                            <label><i className="fas fa-lock"></i></label>
                            <input onChange={onHandleChange} id="my-input" className="" type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label><i className="fas fa-lock"></i></label>
                            <input onChange={onHandleChange} id="my-input" className="" type="password" name="passWord" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label><i className="fas fa-lock"></i></label>
                            <input onChange={onHandleChange} id="my-input" className="" type="password" name="passwordConfirmation" placeholder="Repeat your password" />
                        </div>
                        <div className="check-group">
                            <input onChange={onHandleChange} id="my-input" className="" type="checkbox" name="" />
                            <label>i agree all statement</label>
                        </div>
                        <input onClick={onSignup} type="submit" name="signup" id="signup" value="Register" />
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Signup;