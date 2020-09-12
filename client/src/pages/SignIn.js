import React, { Component } from "react";

import Container from "../components/Container";

import SearchResults from "../components/Passport";

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
                <h1 className="text-center">Enter the State you are traveling to!</h1>
                
                    type="danger"
                    style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                >
                    {this.state.error}
             
            </Container>
        </div>
    );
}

export default SignIn;