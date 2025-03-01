import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, } from 'react-toastify';
import { ThemeProvider, } from '@mui/material';
import theme from './theme';

// Composants
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RideCreationPage from './pages/RideCreationPage';
import BookingRidePage from './pages/BookingRidePage';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/Profile';

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
          path="/booking/:rideId"
          element={<BookingRidePage />}
        />

        {/* Page de Réservations */}
        <Route
          path="/booking/"
          element={<BookingPage />}
        />

        {/* Page Profile */}
        <Route
          path="/profile"
          element={<ProfilePage />}/>
      </Routes>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;