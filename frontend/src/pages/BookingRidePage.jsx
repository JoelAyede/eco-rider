import { Typography, Button, CircularProgress, Alert, Container, Box, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function BookingRidePage() {
  const { rideId } = useParams();
  const [rideDetails, setRideDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Fetch ride details
    axios.get(`/api/ride/${rideId}`)
      .then(response => {
        setRideDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [rideId]);

  const bookRide = async (ride) => {
    try {
      const response = await axios.post('/api/booking/', {
        rideId: ride.id,
        userId: sessionStorage.getItem("id"),
        driverId: ride.driverId,
        seats: 1
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
      console.log(response.data);
      toast.success('Merci de votre réservation. Vous aurez un email de confirmation.');

    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Failed to load ride details.</Alert>;
  }

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Paper elevation={3} sx={{ padding: 4, textAlign: 'start', maxWidth: 400 }}>
          <Typography variant="h4" sx={{ my: 4 }} align="center">
            Détails du trajet #{rideId}
          </Typography>
          {rideDetails && (
            <div>
              <Typography variant="body1">Départ: {rideDetails.startPoint}</Typography>
              <Typography variant="body1">Destination: {rideDetails.endPoint}</Typography>
              <Typography variant="body1">Date: {new Date(rideDetails.date).toLocaleDateString('en-CA')}</Typography>
              <Typography variant="body1">Price: {rideDetails.price} FC</Typography>
              <Typography variant="body1">Seats available: {rideDetails.seats}</Typography>
              <Button fullWidth variant="contained" color="primary" onClick={() => bookRide(rideDetails)} sx={{ mt: 2 }}>
                Réserver
              </Button>
            </div>
          )}
        </Paper>
      </Box>
    </Container>
  );
}