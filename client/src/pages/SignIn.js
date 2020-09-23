import React, { useState } from 'react';
import Container from "../components/Container";
import Hero from "../components/Hero";
import axios from 'axios';



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
        }).then(({ data }) => {
            if (data.user) {
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
        <div>
            <Hero backgroundImage="https://th.bing.com/th/id/OIP.oRO26tz94bCZlWos1pgsbAHaE7?pid=Api&rs=1">
                <h1 id="heder-signin">C-19 Travel Tracker</h1>
                <Container style={{ minHeight: "80%" }}>
                    {err ? (<div>{err}</div>) : null}
                    <div className="sign-form">
                        <div>
                            <h3 className="register-text">Register</h3>
                            <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)} />
                            <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)} />
                            <button onClick={register}>Submit</button>
                        </div>

                        <div>
                            <h3 className="register-text">Login</h3>
                            <input placeholder='username' onChange={e => setLoginUsername(e.target.value)} />
                            <input placeholder='password' onChange={e => setLoginPassword(e.target.value)} />
                            <button onClick={login}>Submit</button>
                        </div>
                    </div>




                </Container >
            </Hero >


        </div >

    );
}


export default SignIn;