import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { fade } from '@material-ui/core/styles';
import { IconButton, makeStyles, Tooltip, Link, Badge,MenuItem,Menu} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';

import Analytics from '../assets/imagenes/Analytics.png';
import InformerComercial from '../assets/imagenes/InformeComercialPlus1.png';
import VerCheque from '../assets/imagenes/Vdecheques.png';
import VOdenopago from '../assets/imagenes/VOdenopago.png'; 
import Vdefacturas from '../assets/imagenes/Vdefacturas.png';
import Cobranza from '../assets/imagenes/Cobranza.png';
import FondoImagenes from '../assets/imagenes/fondo.jpg';
const drawerWidth = 310;

const useStyle = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
   
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },


}))


const NavBar = ({open, handleDrawerOpen}) => {
  
    const classes = useStyle(); 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onclick={handleMenuClose}>Tu cuenta</MenuItem>
      <MenuItem onClick={handleMenuClose}>Cerrar sesión</MenuItem>
    </Menu>
  );
    
    return ( 
        <>
        
         <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundImage: `url(${FondoImagenes})`,}}>
          {/*boton hamburguesa */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >            
            <MenuIcon />
          </IconButton>

          <IconButton
          color="inherit"
          
          >
            <Tooltip title="informe comercial" >
             <Link  href="/informecomercial"><img src={InformerComercial} style={{width:'40px', height:'40px'}} /></Link> 
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit"
          >
            <Tooltip title="Verificacion de Cheques">
            <img src={VerCheque} style={{width:'40px', height:'40px'}} />
            </Tooltip>
          </IconButton>

          <IconButton 
          color="inherit">
            <Tooltip title="Analytics">
            <img src={Analytics} style={{width:'40px', height:'40px'}} />
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit">
            <Tooltip title="Verificacion de Orden de No Pago">
            <img src={VOdenopago} style={{width:'40px', height:'40px'}} />
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit">
            <Tooltip title="Verificacion de Factura">
            <img src={Vdefacturas} style={{width:'40px', height:'40px'}} />
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit">
            <Tooltip title="Cobranza">
            <img src={Cobranza} style={{width:'40px', height:'40px'}} />
            </Tooltip>
          </IconButton>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="primary">
                <NotificationsIcon  />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          

          
        </Toolbar>
      </AppBar>
   
      {renderMenu}
        </>
     );
}
 
export default NavBar;
