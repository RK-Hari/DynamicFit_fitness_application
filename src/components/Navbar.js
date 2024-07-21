import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import '../styles.css';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" className="animated-border" style={{ textDecoration: 'none', color: '#d2b0eb', borderBottom: '3px solid #FF2625',fontFamily: 'sans-serif' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#d2b0eb',fontFamily: 'sans-serif' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
