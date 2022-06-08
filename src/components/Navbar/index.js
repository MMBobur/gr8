import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ['HOME', 'ABOUT US', 'SERVICES', 'PRODUCTS','BLOG','CONTACT','DROPDOWN'];
const settings = ['Products', 'Pricing', 'Blog'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{
      backgroundColor:'#959BFFFF',position:'fixed',opacity:'0.9'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:'7%',
            }}
          >
            <img src='data:image/webp;base64,UklGRqoCAABXRUJQVlA4TJ0CAAAvokAHENegkI0kqC7LcP5orwRBtk1dxnB/tBNk29RlDPdHu5oA
            QBMkAxf9w3Exd1kHABQM6R/gcHxEPPhDwcbDwMH9QW0nZaBt21YVSdreTrpALO1Gofv//xQMJTPL54j+T4Bu/s/dL30873qD3X9N5p030A1N5p
            030A1N5p030A1N5p030A1tdt5AN7SJ/HrTmdt1Q5vITxvPc2pkQGzVDW0i32RaQghhCecDDs7HzjNJSkBo1A1tIt8lcT09kZ5KgCQDjjbd0CbyA
            /hGGZzKydS0G9pEvpUbx+yBJGlcvV+26SKPwft1rJ2L9yFJOgDCkrWFMEmyY/E+5EoO3i9npRvaRL6ZJKut1I/aQvWQNFJ3JldAkoNTytQXSRtV
            Z1I3tIn8AFUi16lyPcq49qJ+FknG9SYDnAc2dUObf/h+ZiuQDeCYNsDVfM4LsGgDljE74BwjuDFbbQPClAAsgZMioLtfd/5wd7jZP3HplIAsKQJT
            4STJg5MDL0lAUAInqeZgkZSBNAHbpOOI1ma3Nr2e86YDnCQZkIqzSIABqVjBPZAkycxMVNdRt2/s81eTXs9swCppu5eK/Nl2z7ioWihgbbLPatLr
            GScPmJQAk5SBsQjFCk4O1sLDckMONknmF5812TRGB1iDfVaTXo9NQJAmwJtGACuI0gF4BeCQNiAWjFcBSLIFmDIgqc0+q0mv57QBWVoAHMCmyuW
            hkQ9NI2WqjVwvMsDF0GSf1aRXCwFIVpSLPlskHVdZkv9I29UkHdS9ntpnNenVJgFJ0la4
            Q7W0FZvK7IswSZKtHyn5YjVJyr5Y7al9VpNe39bM9LGZrs1MT5uZrs1MD9b2WU16/eUr+6wmvd7Av7Oa9HoDUZ8+0esNRLXp9Qai2vT6OwMA'
            alt=''/>
          </Typography>

          {/* <Box sx={{ flexGrow: 1,border:'1px solid red',float:'left', display: { xs: 'flex', md: 'none' }  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{border:'1px solid red',float:'right'}}
            >
              <MenuIcon style={{border:'1px solid red',float:'right'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src='data:image/webp;base64,UklGRqoCAABXRUJQVlA4TJ0CAAAvokAHENegkI0kqC7LcP5orwRBtk1dxnB/tBNk29RlDPdHu5oA
            QBMkAxf9w3Exd1kHABQM6R/gcHxEPPhDwcbDwMH9QW0nZaBt21YVSdreTrpALO1Gofv//xQMJTPL54j+T4Bu/s/dL30873qD3X9N5p030A1N5p
            030A1N5p030A1N5p030A1tdt5AN7SJ/HrTmdt1Q5vITxvPc2pkQGzVDW0i32RaQghhCecDDs7HzjNJSkBo1A1tIt8lcT09kZ5KgCQDjjbd0CbyA
            /hGGZzKydS0G9pEvpUbx+yBJGlcvV+26SKPwft1rJ2L9yFJOgDCkrWFMEmyY/E+5EoO3i9npRvaRL6ZJKut1I/aQvWQNFJ3JldAkoNTytQXSRtV
            Z1I3tIn8AFUi16lyPcq49qJ+FknG9SYDnAc2dUObf/h+ZiuQDeCYNsDVfM4LsGgDljE74BwjuDFbbQPClAAsgZMioLtfd/5wd7jZP3HplIAsKQJT
            4STJg5MDL0lAUAInqeZgkZSBNAHbpOOI1ma3Nr2e86YDnCQZkIqzSIABqVjBPZAkycxMVNdRt2/s81eTXs9swCppu5eK/Nl2z7ioWihgbbLPatLr
            GScPmJQAk5SBsQjFCk4O1sLDckMONknmF5812TRGB1iDfVaTXo9NQJAmwJtGACuI0gF4BeCQNiAWjFcBSLIFmDIgqc0+q0mv57QBWVoAHMCmyuW
            hkQ9NI2WqjVwvMsDF0GSf1aRXCwFIVpSLPlskHVdZkv9I29UkHdS9ntpnNenVJgFJ0la4
            Q7W0FZvK7IswSZKtHyn5YjVJyr5Y7al9VpNe39bM9LGZrs1MT5uZrs1MD9b2WU16/eUr+6wmvd7Av7Oa9HoDUZ8+0esNRLXp9Qai2vT6OwMA'
            alt=''/>
          </Typography>

          <Box sx={{ flexGrow: 1,justifyContent:'end',
           display: { xs: 'flex', md: 'none' }  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} style={{marginLeft:'25%'}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar