import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import './style.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Banner() {
  return (
    <Box style={{backgroundColor:'blue',height:'600px',width:'100%'}}>
       <Container>
      <Grid container spacing={5} columns={12}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{mt:'2%'}}>
        <Typography>
         <h1 style={{fontSize:'350%',color:'white'}}>Improved <br/>Production levelwith Robotics</h1>
        <p style={{color:'white'}}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
          
      </Typography>
      <button className='A' >View detailes</button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{mt:'5%'}}>
        <Typography>
          <img style={{width:'80%',height:"50%"}} src="https://preview.colorlib.com/theme/robotics/img/xbanner-img.png.pagespeed.ic.rP02BqzGTZ.webp" alt=""/>
          </Typography>
        </Grid>
      </Grid>
      </Container> 
    </Box>
  );
}
