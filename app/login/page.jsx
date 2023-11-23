'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Container, Button, Box, Checkbox, Typography, FormControlLabel } from '@mui/material';
import './Login.css'
import Header from '../Header';
import LoginFrom from './LoginForm';


const Login = () => {
    const router = useRouter()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        console.log(`http://localhost:8080/api/auth/signin`)
        fetch(`http://localhost:8080/api/auth/signin`, {
            method: "POST",
            body: JSON.stringify({
                usernameOrEmail: data.get("email"),
                password: data.get("password")
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {localStorage.setItem("token", data.tokenType.concat(" ", data.accessToken))})
        router.push('/')
    }

    return(
        <Container>
            <Header/>
            <div className="container">
                <Typography component="h1" variant="h5">
                Вхід
                </Typography>
                <LoginFrom  handleSubmit={handleSubmit} />
            </div>
        </Container> 
    )
}

export default Login;