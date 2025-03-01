import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, } from '@mui/material';
import theme from './theme';

// Composants
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RideCreationPage from './pages/RideCreationPage';
import RideDetailPage from './pages/RideDetailPage';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar />

        <Routes>
          {/* Page d'accueil - Liste des trajets */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* Page de connexion */}
          <Route
            path="/login"
            element={<LoginPage />}
          />

          {/* Page de creation compte */}
          <Route
            path="/register"
            element={<RegisterPage />}
          />

          {/* Page de création de trajet */}
          <Route
            path="/create-ride"
            element={<RideCreationPage />}
          />

          {/* Page de détails d'un trajet */}
          <Route
            path="/ride/:rideId"
            element={<RideDetailPage />}
          />
        </Routes>
    </ThemeProvider>
  );
}

export default App;