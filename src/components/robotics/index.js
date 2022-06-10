import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';




const foo = [
  {imge:'https://preview.colorlib.com/theme/robotics/img/xp1.png.pagespeed.ic.WNcQT4xnu0.webp',
  name1:'The Upper Eye',name2:'Who are in extremely love with eco friendly system.'},
  {imge:'https://preview.colorlib.com/theme/robotics/img/xp2.png.pagespeed.ic.1x6irKq2as.webp',
  name1:'The Crab Wheel',name2:'Who are in extremely love with eco friendly system.'},
  {imge:'https://preview.colorlib.com/theme/robotics/img/xp3.png.pagespeed.ic.M5ZZut6ogP.webp',
  name1:'The Plug Ninja',name2:'Who are in extremely love with eco friendly system.'},
  {imge:'https://preview.colorlib.com/theme/robotics/img/xp4.png.pagespeed.ic.h4H27DKuGo.webp',
  name1:'The Controller',name2:'Who are in extremely love with eco friendly system.'},
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function robotics() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{border:'1px '}}>
      <Container fixed>
      <Typography component='div' style={{textAlign:'center'}}>
      <Typography variant='h4' style={{marginTop:'10%',fontWeight:'bold'}}>
        Featured Robotics Products to Show
        </Typography>
      <Typography style={{marginTop:'1%',marginBottom:'5%',color:'gray'}}>
        Who are in extremely love with eco friendly system.
        </Typography>
      </Typography>

      <Grid container spacing={0} style={{marginBottom:'10%'}}>
        {foo.map((foo) => (
          <Grid xs={12} md={6} sm={6} lg={3} key={foo} padding={1}>
            <Item >
                <img src={foo.imge} alt="" /> 
            <Typography style={{border:'1px solid #F9F9FFFF',textAlign:'center',backgroundColor:'#F9F9FFFF'}}>
                <Typography style={{fontWeight:'bolder',color:'black',fontSize:'20px',marginTop:'5%',marginBottom:'5%'}}>
                  {foo.name1}
                  </Typography>
                <Typography style={{margin:'3%'}}>
                  {foo.name2}
                  </Typography>
                <Typography style={{marginTop:'5%',marginBottom:'5%'}}>
                  <Button sx={{":hover":{backgroundColor:'#BF28FFFF',color:'white'},fontWeight:'bold',backgroundColor:'white',
                border:'1px solid transparent'}}>
                    VIEW DETAILS
                    </Button>
                  </Typography>
              </Typography>
              </Item>
             
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  )
}

export default robotics