//import React, { Component } from "react";
import React, {useState} from 'react';
import Container from "../components/Container";
import axios from 'axios';
//import SearchResults from "../components/Passport";


function SignIn(props) {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [err, setError] = useState(null);

    //logic to send it off to the backend
    const register = (e) => {
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

    const login = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            url: "/login",
        }).then(({data}) => {
            if(data.user) {
                setError(null);
                props.history.push("/search");
            } else {
                // console.log(data)
                setError(data.error);
            }
        })
        .catch(err => console.log(err))
    };


        return (
            <Container style={{ minHeight: "80%" }}>
                {err ? (<div>{err}</div>) : null}
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
            </Container> 
        );
    }


export default SignIn;