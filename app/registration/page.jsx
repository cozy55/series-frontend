'use client'
import React, { useEffect, useState } from 'react';
import { TextField, Container, Button, Box, Checkbox, Typography, FormControlLabel } from '@mui/material';
import './Registration.css'
import Header from '../Header';
import { useRouter } from 'next/navigation'
import RegistrationForm from './RegistrationForm'


const Registration = () => {
    const router = useRouter()
    const [isRegistered, setIsRegistered] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        console.log(`http://localhost:8080/api/auth/signup`)
        fetch(`http://localhost:8080/api/auth/signup`, {
            method: "POST",
            body: JSON.stringify({
                username: data.get("username"),
                email: data.get("email"),
                password: data.get("password"),
                matchingPassword: data.get("matchingPassword")
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                setIsRegistered(true)
            }
        })

    }

    return(
        <Container>
            <Header/>
            <div className="container">
                <Typography component="h1" variant="h5">
                Реєстрація
                </Typography>
                {isRegistered
                ? "На вашу пошту прийде лист для підтвердження реєстрації"
                : <RegistrationForm handleSubmit={handleSubmit}/>}
            </div>
        </Container>    
    )
}

export default Registration;