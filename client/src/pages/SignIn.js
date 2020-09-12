import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from "../components/Container";

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
            url: "http://localhost:3000/register",
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
            url: "http://localhost:3000/login",
        }).then((res) => setData(res.data));
    };

    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3000/user",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };

    render() {
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
                    <div>
                        <h1 className="text-center">Enter the State you are traveling to!</h1>

                    type="danger"
                    style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}

                        {this.state.error}
                    </div>
                </Container>
            </div>
        );
    }
}

export default SignIn;