import React from 'react';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          Connexion
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
          />
          
          <TextField
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