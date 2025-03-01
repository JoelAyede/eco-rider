import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Pagination } from '@mui/material';
import RideCard from '../components/RideCard';
import axios from 'axios';


const HomePage = () => {

  const [rides,setRides] = useState([])

  const fetchRides = async () => {
    try {
      const response = await axios.get('/api/ride');
      console.log(response.data);
      setRides(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRides();
  },[])

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