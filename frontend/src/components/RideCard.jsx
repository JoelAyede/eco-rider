import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EuroIcon from '@mui/icons-material/Euro';

export default function RideCard({ ride }) {
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
            icon={<EuroIcon />}
            label={`${ride.price} €`}
            color="success"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Conducteur: {ride.driver.name} • Places restantes: {ride.seats}
        </Typography>

        <Button
          component={Link}
          to={`/ride/${ride.id}`}
          variant="outlined"
          fullWidth
        >
          Voir les détails
        </Button>
      </CardContent>
    </Card>
  );
}