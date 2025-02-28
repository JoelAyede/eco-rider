import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import RideCard from '../components/RideCard';

const HomePage = () => {
  // Exemple de données (à remplacer par des données réelles)

  console.log("Hello ");
  const rides = [
    { id: 1, startPoint: 'Paris', endPoint: 'Lyon', date: new Date(), price: 25, seats: 3, driver: { name: 'Jean Dupont' } },
    { id: 2, startPoint: 'Marseille', endPoint: 'Nice', date: new Date(), price: 15, seats: 2, driver: { name: 'Marie Curie' } },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ my: 4 }} align="center">
        Trajets disponibles
      </Typography>

      <Grid container spacing={3}>
        {rides.map((ride) => (
          <Grid item xs={12} md={6} key={ride.id}>
            <RideCard ride={ride} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage