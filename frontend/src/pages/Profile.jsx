import React, { useState, useEffect } from 'react';
import { Container, Typography, Avatar, Grid, Paper, Button, Box, TextField } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProfilePage = () => {
     const [user, setUser] = useState({ name: '', email: '', password: '' });

     useEffect(() => {
          fetchUser();
     }, []);

     const fetchUser = async () => {

          const id = sessionStorage.getItem('id');

          // Replace with your API call
          const response = await axios.get(`/api/user/${id}`);
          setUser(response.data);
     };

     const updateUser = async () => {

          const id = sessionStorage.getItem('id');
          // Replace with your API call
          const res = await axios.put(`/api/user/${id}`, user, {
               headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
               }
          });
          toast.success('Profile Mis à jour !');
          console.log(res.data);

     };

     const handleChange = (e) => {
          const { name, value } = e.target;
          setUser((prevUser) => ({
               ...prevUser,
               [name]: value,
          }));
     };

     return (
          <Container>
               <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                    <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', maxWidth: 400 }}>
                         <Avatar
                              alt="Profile Picture"
                              src="/static/images/avatar/1.jpg"
                              sx={{ width: 100, height: 100, margin: '0 auto 16px' }}
                         />
                         <Typography variant="h5" gutterBottom>
                              {user.name}
                         </Typography>
                         <Typography variant="body1" color="textSecondary" gutterBottom>
                              {user.email}
                         </Typography>
                         <Box component="form" noValidate autoComplete="off">
                              <TextField
                                   fullWidth
                                   margin="normal"
                                   label="Name"
                                   name="name"
                                   value={user.name}
                                   onChange={handleChange}
                              />
                              <TextField
                                   fullWidth
                                   margin="normal"
                                   label="Email"
                                   name="email"
                                   value={user.email}
                                   onChange={handleChange}
                              />
                              <TextField
                                   fullWidth
                                   margin="normal"
                                   label="Password"
                                   type="password"
                                   name="password"
                                   value={user.password}
                                   onChange={handleChange}
                              />
                         </Box>
                         <Button fullWidth variant="contained" color="primary" onClick={updateUser}>
                              Mettre à jour
                         </Button>

                    </Paper>
               </Box>
          </Container>
     );
};

export default ProfilePage;