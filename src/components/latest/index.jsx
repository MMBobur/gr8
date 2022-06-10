import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rasm from '../latest/1.jpg'
import Rasm2 from '../latest/1.jpg'
import { Container } from '@mui/system';
import "./style.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Latest() {
  return (
    <Box sx={{ width: '100%' }}>
        <Container>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 7, sm: 2, md: 3}}>
      <Grid item xs={12}>
    <Typography>
    <Typography>
          <h1 style={{textAlign:'center',fontSize:'50px'}}>Latest News from our Blog</h1>
          <p style={{textAlign:'center',marginTop:'-2%',color:'#777777'}}>Who are in extremely love with eco friendly system.</p>
          </Typography> 
    </Typography>
  </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <>
             <img src={Rasm} alt="" style={{width:'100%'}}/>
              </>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <>
              <img src={Rasm2} alt=""  style={{width:'100%'}}/>
          </>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
        <Typography>
          <button className='A'>Travel</button>
          <button className='A'>Life style</button>
          <h2>Portable latest Fashion for young women</h2>
          <p style={{color:'#777777'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span style={{fontSize:'15px'}}>31st May,2022</span>
          </Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={6} lg={6}>
  <Typography>
          <button className='A'>Travel</button>
          <button className='A'>Life style</button>
          <h2>Portable latest Fashion for young women</h2>
          <p style={{color:'#777777'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span style={{fontSize:'15px'}}>31st May,2022</span>
          </Typography>
  </Grid>
      </Grid>
      </Container>
    </Box>
  );
}