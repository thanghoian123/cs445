import React, { useState } from 'react';
import './style.css';
import imgUrl from '../signinUrl.jpg';
import { Link, Redirect } from 'react-router-dom';


function Singin(props) {
    const [currentUser, setCurrentUser] = useState({
        userName: '',
        passWord: '',
        reDirect: false
    });

    

    const onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCurrentUser({ ...currentUser, [name]: value });

    }

    const onHandleSubmit = e => {
        e.preventDefault();
        // fetch("http://localhost:8081/api/auth/signin", requestOptions)
        // .then(response => response.text())
        // .then(result => {
        //     const users = JSON.parse(result);
        //     if(users.accessToken){
        //         localStorage.setItem('token',result);
        //         setCurrentUser({...currentUser,reDirect:true})
        //     }else{
        //         alert('ten dang nhap hoac mat khau khong dung')
        //     }
           
        // })
        // .catch(error => console.log('error', error))

        var axios = require('axios');
        var data = JSON.stringify({ "username": `${currentUser.userName}`, "password": `${currentUser.passWord}` });

        var config = {
            method: 'post',
            url: 'https://api-doan.herokuapp.com/api/v1/auth/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if(response.data.accessToken){
                    localStorage.setItem('token',JSON.stringify(response.data));
                    setCurrentUser({...currentUser,reDirect: true});
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    

    
    const onLogin = () => {
        console.log(currentUser);
    }

    if(currentUser.reDirect){
        return (
            <Redirect to='/'/>
        )  
    }
    return (
        <div className="contain-all">
            <div className="signin-box">
                <div className="img-box">
                    <img src={imgUrl} alt="" />
                    <Link to="/signup">Create an account</Link>
                </div>
                <div className="singin-form">
                    <h2 className="sign-title">Sign in</h2>
                    <form onSubmit={onHandleSubmit} action="">
                        <div className="form-group">
                            <label for="my-input"><i className="fas fa-user"></i></label>
                            <input id="my-input" className=" custom-input" type="text" name="userName" onChange={onHandleChange} placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label for="my-input"><i className="fas fa-lock"></i></label>
                            <input id="my-input" className="" type="password" name="passWord" onChange={onHandleChange} placeholder="Password" />
                        </div>
                        <div className="check-group">
                            <input id="my-input" className="" type="checkbox" name="" />
                            <label for="my-input">Remember me</label>
                        </div>
                        <input onClick={onLogin} type="submit" name="signup" id="signup" value="Sign in" />
                    </form>
                    <div className="social">
                        <ul id="social">
                            <li><p>Or login with</p></li>
                            <ul className="social-icon">
                                <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href=""><i className="fab fa-instagram"></i></a></li>
                                <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Singin;