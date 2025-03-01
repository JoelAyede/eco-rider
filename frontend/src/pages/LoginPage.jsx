import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logique de connexion

    try {
      const response = await axios.post('/api/user/login', {email, password});
      if (response.data.id != 0) {
        sessionStorage.setItem('name', response.data.name);
        sessionStorage.setItem('id', response.data.id);
        sessionStorage.setItem('token', response.data.token);
        toast.success('Connexion réussie')
        console.log(response.data);
        navigate('/');
      };
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error)
    }

  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          Connexion
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
          type='email'
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
          onChange={(e) => setPassword(e.target.value)}
            fullWidth
            label="Mot de passe"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Se connecter
          </Button>

          <Typography align="center">
            Pas de compte ? <Link to="/register">S'inscrire</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}