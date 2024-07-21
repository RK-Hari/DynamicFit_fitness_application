import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box pt="10px" mt="80px" sx={{ background: '#661304' }}>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px', animation: 'bounce 1s linear infinite' }} />
    </Stack>
    <Typography 
      variant="h5" 
      sx={{ 
        fontSize: { lg: '28px', xs: '20px' }, 
        color: 'white',
        textAlign: 'center',
        mt: '41px', 
        pb: '40px',
        maxWidth: '800px',
        mx: 'auto', // Center horizontally
        animation: 'fadeIn 2s ease-in-out'
      }}
    >
      💪🏼 Transform your fitness journey with our comprehensive exercise library and personalized workout plans. Explore, learn, and achieve your health goals with ease and inspiration. Stay fit, stay motivated!!! 💪🏼
    </Typography>
  </Box>
);

export default Footer;

