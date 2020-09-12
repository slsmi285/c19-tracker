//import React, { Component } from "react";
import React, {useState} from 'react';
import Container from "../components/Container";
import axios from 'axios';
//import SearchResults from "../components/Passport";


function SignIn() {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);

    //logic to send it off to the backend
    const register = () => {
        axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "/register",
        }).then((res) => console.log(res));
    };

    const login = () => {
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "/login",
        }).then((res) => setData(res.data));
    };

    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "/user",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };

    //render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <div>
                        <h1>Register</h1>
                        <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)} />
                        <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)} />
                        <button onClick={register}>Submit</button>
                    </div>
                    <div>
                        <h1>Login</h1>
                        <input placeholder='username' onChange={e => setLoginUsername(e.target.value)} />
                        <input placeholder='password' onChange={e => setLoginPassword(e.target.value)} />
                        <button onClick={login}>Submit</button>
                    </div>
                    <div>
                        <h1>Get User</h1>
                        <button onClick={getUser}>Submit</button>
                        {data ? <h1>Welcome Back {data.username}</h1> : null}
                    </div>
                   
                </Container>
            </div>
        );
    }


export default SignIn;