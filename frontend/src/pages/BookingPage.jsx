import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Paper, Button } from '@mui/material';
import { toast } from 'react-toastify';

const BookingPage = () => {
     const [reservations, setReservations] = useState([]);

     useEffect(() => {
          // Fetch reservations from the API
          const fetchReservations = async () => {
               try {
                    const userId = sessionStorage.getItem('id');
                    const response = await axios.get(`/api/booking/${userId}`);
                    setReservations(response.data);
                    console.table(response.data);
               } catch (error) {
                    console.error('Error fetching reservations:', error);
               }
          };

          fetchReservations();
     }, []);

     const handleDelete = async (reservationId) => {
          try {
               await axios.delete(`/api/booking/${reservationId}`);
               setReservations(reservations.filter(reservation => reservation.id !== reservationId));
               toast.error("Reservation annuler")
          } catch (error) {
               console.error('Error deleting reservation:', error);
          }
     };

     return (
          <Container>
               <Typography variant="h4" gutterBottom>
                    Vos Résérvations
               </Typography>
               {reservations.length === 0 ? (
                    <Typography variant="body1">No reservations found.</Typography>
               ) : (
                    <List>
                         {reservations.map((reservation) => (
                              <Paper key={reservation.id} elevation={3} style={{ marginBottom: '16px', padding: '16px' }}>
                                   <ListItem>
                                        <ListItemText
                                             primary={`Reservation ID: ${reservation.id}`}
                                             secondary={
                                                  <>
                                                       <Typography component="span" variant="body2" color="textPrimary">
                                                            Trajet: {reservation.ride.startPoint} - {reservation.ride.endPoint}
                                                       </Typography>
                                                       <br />
                                                       <Typography component="span" variant="body2" color="textPrimary">
                                                            Date: {new Date(reservation.ride.date).toLocaleDateString('en-CA')}
                                                       </Typography>
                                                       <br />
                                                       <Typography component="span" variant="body2" color="textPrimary">
                                                            Client: {reservation.user.name}
                                                       </Typography>
                                                  </>
                                             }
                                        />
                                        <Button variant="contained" color="secondary" onClick={() => handleDelete(reservation.id)}>
                                             Annuler
                                        </Button>
                                   </ListItem>
                              </Paper>
                         ))}
                    </List>
               )}
          </Container>
     );
};

export default BookingPage;