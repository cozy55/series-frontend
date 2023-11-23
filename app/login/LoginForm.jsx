import React, { useEffect, useState } from 'react';
import { TextField, Container, Button, Box, Checkbox, Typography, FormControlLabel } from '@mui/material';
import './Login.css'
import { useRouter } from 'next/navigation'

const RegistrationForm = ({handleSubmit}) => {
    return(<Box className="form" component="form" method="POST" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Пошта"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Увійти
                    </Button>
                </Box>
    )
}

export default RegistrationForm;