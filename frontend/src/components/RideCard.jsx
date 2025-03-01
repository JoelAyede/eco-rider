import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EuroIcon from '@mui/icons-material/Euro';
import { Money } from '@mui/icons-material';

export default function RideCard({ ride }) {

  const id = sessionStorage.getItem("id")

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip
            icon={<PlaceIcon />}
            label={`${ride.startPoint} → ${ride.endPoint}`}
            color="primary"
          />
          <Chip
            icon={<ScheduleIcon />}
            label={new Date(ride.date).toLocaleDateString()}
          />
          <Chip
            icon={<Money />}
            label={`${ride.price} FC`}
            color="success"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Conducteur: {ride.driver.name} • Places restantes: {ride.seats}
        </Typography>

        {id != null ? (
          <Button
            component={Link}
            to={`/booking/${ride.id}`}
            variant="outlined"
            fullWidth
          >
            Réserver
          </Button>) : (
          <Typography color='red'>
            Connecter vous pour réserver
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}