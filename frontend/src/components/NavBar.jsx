import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Auth from './Auth';

export default function NavBar() {
  const location = useLocation();

  const isAuthenticated = () => {
    return sessionStorage.getItem('id') && sessionStorage.getItem('name');
  };

  useEffect(() => {
    isAuthenticated();
  }, [location]);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <DirectionsCarIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EcoRide
        </Typography>

        <Button color="inherit" component={Link} to="/">Accueil</Button>
        <Button color="inherit" component={Link} to="/create-ride">Proposer un trajet</Button>
        {isAuthenticated() ? <Auth /> : (
          <Button color="inherit" component={Link} to="/login">
            Connexion
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}