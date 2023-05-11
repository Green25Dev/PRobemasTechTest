import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../consts/style';

const pages = ['OSRS Gold', 'RS3 Gold', 'Sell RS Gold', 'OSRS Accounts', 'Reward Chests'];
const settings = ['Profile', 'Settings', 'Logout'];

function ResponsiveAppBar() {
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
      <AppBar position="static" sx={{backgroundImage: 'none', backgroundColor: '#142241', color: '#FAFAFA', borderBottom: '1px solid rgba(233, 177, 9, 0.75)', boxShadow: '0px 4px 3px rgba(23, 34, 39, 0.25)'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}><img src='/images/logo.png' /></Box> */}

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 5 }}><img src='/images/logo.png' /></Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }}><img src='/images/logo.png' /></Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#FAFAFA', display: 'block', fontWeight: '14px', fontFamily: 'Gilroy', fontStyle: 'normal', fontWeight: '600', lineHeight: '17px' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="contained" color="warning" sx={{backgroundColor: '#E9B109'}}>Sign Up</Button>
            </Box>

            <Box sx={{  }}>
              <Button variant="contained" color="warning" sx={{backgroundColor: '#E9B109'}}>Sign In</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
export default ResponsiveAppBar;
