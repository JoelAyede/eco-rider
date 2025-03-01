import React from 'react';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function RideCreationPage() {

  const [form, setForm] = React.useState({
    startPoint: '',
    endPoint: '',
    date: '',
    time: '',
    price: '',
    seats: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation manuelle de la date/heure
    const dateTime = new Date(`${form.date}T${form.time}`);
    if (isNaN(dateTime)) {
      alert('Format de date/heure invalide');
      return;
    }

    // Logique de création avec dateTime.toISOString()
    try {
      const response = await axios.post('/api/ride', {
        ...form,
        date: dateTime.toISOString()
      },{
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      console.log(response.data);

      toast.success("Trajet publié avec succès");
      // Reset form inputs
      setForm({
        startPoint: '',
        endPoint: '',
        date: '',
        time: '',
        price: '',
        seats: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ my: 4 }} align="center">
        Proposer un trajet
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Point de départ"
              value={form.startPoint}
              onChange={(e) => setForm({ ...form, startPoint: e.target.value })}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Point d'arrivée"
              value={form.endPoint}
              onChange={(e) => setForm({ ...form, endPoint: e.target.value })}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Date de départ</Typography>
            <TextField
              type='date'
              fullWidth
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Heure de départ</Typography>
            <TextField
              type='time'
              fullWidth
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              placeholder="14:30"
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Prix (FC)"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Places disponibles"
              type="number"
              value={form.seats}
              onChange={(e) => setForm({ ...form, seats: e.target.value })}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
            >
              Publier le trajet
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}