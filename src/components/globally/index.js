import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import CallEndIcon from '@mui/icons-material/CallEnd';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DiamondIcon from '@mui/icons-material/Diamond';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Globally() {
  return (
    <div>
      <Box sx={{ width: '100%', mt: 5, mb: 20 }}>
        <Grid container rowSpacing={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} sx={{ bgcolor: '#F9F9FF' }}>
            <Box sx={{ textAlign: 'center' }}>
              <img src='images.jpg' style={{ width: '100%', m: '0px', p: '0px' }} />
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ alignSelf: 'center' }}>
            <Container sx={{ alignSelf: 'center' }}>
              <Typography variant="h4" sx={{ '&:hover': { cursor: 'text' } }}>
                <b>Globally Connected<br />
                  by Large Network</b>
              </Typography>
              <Typography variant="h6" sx={{ mt: '2%', mb: '2%' }}>
                We are here to listen from you deliver exellence
              </Typography>
              <Typography sx={{ mb: '3%', '&:hover': { cursor: 'text' } }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
              </Typography>
              <Button href='https://preview.colorlib.com/theme/robotics/#' sx={{ background: "linear-gradient(to right, #77609e, #8990ff)", px: '5%', color: 'white', bgcolor: '#8990FF', borderRadius: '0px', border: '1px solid #8990FF' }}>Get Details</Button>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Grid container rowSpacing={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} >
            <Container sx={{ alignSelf: 'center' }}>
              <Typography sx={{ fontSize: 11, mb: '4%', color: '#8990FF' }} >
                BRAND NEW APP TO BLOW YOUR MIND
              </Typography>
              <Typography variant='h4'>
                <b> We’ve made a life<br />
                  that will change you</b>
              </Typography>
              <Typography sx={{ mb: '3%', mt: '3%' }}>
                <b>We are here to listen from you deliver exellence</b>
              </Typography>
              <Typography sx={{ color: '#848684', mb: '3%' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button href='https://preview.colorlib.com/theme/robotics/#' sx={{ background: "linear-gradient(to right, #77609e, #8990ff)", bgcolor: '#8990FF', color: 'white', borderRadius: '0px', border: '1px solid #8990FF', px: '4%' }}>Get Started Now</Button>
            </Container>
          </Grid>
          <Grid item xs={12} md={6} sx={{}}>
              <Button  href=' https://www.youtube.com/' sx={{  top: '200px', left: '280px', }}>
                <PlayCircleOutlineIcon sx={{ fontSize: 60, }} />
              </Button>
            <img src='image.jpg' style={{ width: '100%', m: '0px', p: '0px',  }} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ pt: 12, my: 12, bgcolor: 'red', pb: '10%' }}>
        <Container>
          <Box container sx={{ mb: 7 }}>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>Some Features that Made us Unique
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>Some Features that Made us Unique
            </Typography>
          </Box>
          <Grid container rowSpacing={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} md={4}>
              <Item sx={{ p: '7%', textAlign: 'start' }}>
                <Link
                  underline="hover"
                  color="inherit"
                  href="https://preview.colorlib.com/theme/roboti"
                  variant='h6'
                  sx={{ '&:hover': { color: '#959BFF', display: 'flex', alignSelf: 'center' } }}
                >
                  <PersonOutlineIcon sx={{ pr: '3%', fontSize: 30, }} />
                  <b>
                    Expert Technician
                  </b>
                </Link>
                <Typography >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</Typography>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item sx={{ p: '7%', textAlign: 'start' }}>
                <Link
                  underline="hover"
                  color="inherit"
                  href="https://preview.colorlib.com/theme/roboti"
                  variant='h6'
                  sx={{ '&:hover': { color: '#959BFF', display: 'flex', alignSelf: 'center' } }}
                >
                  <WysiwygIcon sx={{ pr: '3%', fontSize: 30, }} />
                  <b>
                    Professional Service
                  </b>
                </Link>
                <Typography >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</Typography>
              </Item>
            </Grid><Grid item xs={6} md={4}>
              <Item sx={{ p: '7%', textAlign: 'start' }}>
                <Link
                  underline="hover"
                  color="inherit"
                  href="https://preview.colorlib.com/theme/roboti"
                  variant='h6'
                  sx={{ '&:hover': { color: '#959BFF', display: 'flex', alignSelf: 'center' } }}
                >
                  <CallEndIcon sx={{ pr: '3%', fontSize: 30, }} />
                  <b>
                    Great Support
                  </b>
                </Link>
                <Typography >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</Typography>
              </Item>
            </Grid><Grid item xs={6} md={4}>
              <Item sx={{ p: '7%', textAlign: 'start' }}>
                <Link
                  underline="hover"
                  color="inherit"
                  href="https://preview.colorlib.com/theme/roboti"
                  variant='h6'
                  sx={{ '&:hover': { color: '#959BFF', display: 'flex', alignSelf: 'center' } }}
                >
                  <RocketLaunchIcon sx={{ pr: '3%', fontSize: 30, }} />
                  <b>
                    Expert Technician
                  </b>
                </Link>
                <Typography >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</Typography>
              </Item>
            </Grid><Grid item xs={6} md={4}>
              <Item sx={{ p: '7%', textAlign: 'start' }}>
                <Link
                  underline="hover"
                  color="inherit"
                  href="https://preview.colorlib.com/theme/roboti"
                  variant='h6'
                  sx={{ '&:hover': { color: '#959BFF', display: 'flex', alignSelf: 'center' } }}
                >
                  <DiamondIcon sx={{ pr: '3%', fontSize: 30, }} />
                  <b>
                    Expert Technician
                  </b>
                </Link>
                <Typography >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</Typography>
              </Item>
            </Grid><Grid item xs={6} md={4}>
              <Item sx={{ p: '7%', textAlign: 'start' }}>
                <Link
                  underline="hover"
                  color="inherit"
                  href="https://preview.colorlib.com/theme/roboti"
                  variant='h6'
                  sx={{ '&:hover': { color: '#959BFF', display: 'flex', alignSelf: 'center' } }}
                >
                  <ChatBubbleOutlineIcon sx={{ pr: '3%', fontSize: 30, }} />
                  <b>
                    Expert Technician
                  </b>
                </Link>
                <Typography >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</Typography>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Globally