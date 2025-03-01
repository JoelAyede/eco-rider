import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PersonPin } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Auth = () => {

     const [anchorEl, setAnchorEl] = useState(null);
     const navigate = useNavigate();

     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
          setAnchorEl(null);
     };

     const logout = () => {
          toast.success("Vous êtes déconnecté(e)");
          sessionStorage.clear();
          navigate("/login")
     }

     return (<>
          <Button
               aria-controls="simple-menu"
               aria-haspopup="true"
               onClick={handleClick}
               color='white'
          >
               <PersonPin />
          </Button>
          <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               keepMounted
               open={Boolean(anchorEl)}
               onMouseLeave={handleClose}
          >
               <MenuItem>
                    <Button color='white' component={Link} to="/profile">
                         Profile
                    </Button>
               </MenuItem>
               <MenuItem>
                    <Button color='white' onClick={logout}>Deconnexion</Button>
               </MenuItem>
          </Menu>
     </>
     );
};

export default Auth;
