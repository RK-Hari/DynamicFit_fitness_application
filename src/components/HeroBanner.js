import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../styles.css';
import HeroBannerImage from '../assets/images/banner.jpeg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography className="animated-title" color="#FF2625" fontFamily="sans-serif" fontWeight="600" fontSize="26px" >DynamicFit</Typography>
    <Typography className="animated-title" fontFamily="sans-serif" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
     Elevate Your  <br />
     Game
    </Typography>
    <Typography color="#d2b0eb" fontSize="22px" fontFamily="sans-serif" lineHeight="35px">
    Transform Your Fitness Journey: Explore, Learn, Achieve!
    </Typography>
    <Stack>
  <a 
    href="#exercises" 
    style={{ 
      marginTop: '45px', 
      textDecoration: 'none', 
      width: '200px', 
      textAlign: 'center', 
      background: '#FF2625', 
      padding: '14px', 
      fontSize: '22px', 
      textTransform: 'none', 
      color: 'white', 
      borderRadius: '4px',
      fontFamily: 'sans-serif'
    }}
  >
    Explore Exercises
  </a>
</Stack>

    <Typography className="animated-title" fontWeight={600} fontFamily="sans-serif" color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Work Hard...
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ width: '700px',marginRight:'-40px' }}/>
  </Box>
);

export default HeroBanner;
