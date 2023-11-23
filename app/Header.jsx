// src/components/Header.js
import { AppBar, Toolbar, Button } from '@material-ui/core';
import {React, useEffect, useState } from 'react';

const Header = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"))
  })

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href='/'>Головна</Button>
        <Button color="inherit" href='/subscriptions'>Підписки</Button>
        {!token && (
          <>
            <Button color="inherit" href='/login'>Вхід</Button>
            <Button color="inherit" href='/registration'>Реєстрація</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
