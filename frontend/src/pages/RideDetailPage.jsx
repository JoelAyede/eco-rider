import { Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function RideDetailPage() {
  const { rideId } = useParams(); // Récupération de l'ID depuis l'URL

  // Ici, vous ferez un appel API pour récupérer 
  // les détails complets du trajet avec l'ID

  return (
    <div>
      <Typography variant="h4" sx={{ my: 4 }} align="center">Détails du trajet #{rideId}</Typography>
      {/* Affichage des données */}
    </div>
  );
}