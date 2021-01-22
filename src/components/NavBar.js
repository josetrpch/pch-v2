import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles, Tooltip, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';

import clsx from 'clsx';

import Analytics from '../assets/imagenes/Analytics.png';
import InformerComercial from '../assets/imagenes/InformeComercialPlus1.png';
import VerCheque from '../assets/imagenes/Vdecheques.png';
import VOdenopago from '../assets/imagenes/VOdenopago.png'; 
import Vdefacturas from '../assets/imagenes/Vdefacturas.png';
import Cobranza from '../assets/imagenes/Cobranza.png';
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


}))


const NavBar = ({open, handleDrawerOpen}) => {
  
    const classes = useStyle(); 
    
    return ( 
        <>
        
          <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
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
             <Link  href="/informecomercial"><img src={InformerComercial} style={{width:'50px', height:'50px'}} /></Link> 
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit"
          >
            <Tooltip title="Verificacion de Cheques">
            <img src={VerCheque} style={{width:'50px', height:'50px'}} />
            </Tooltip>
          </IconButton>

          <IconButton 
          color="inherit">
            <Tooltip title="Analytics">
            <img src={Analytics} style={{width:'50px', height:'50px'}} />
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit">
            <Tooltip title="Verificacion de Orden de No Pago">
            <img src={VOdenopago} style={{width:'50px', height:'50px'}} />
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit">
            <Tooltip title="Verificacion de Factura">
            <img src={Vdefacturas} style={{width:'50px', height:'50px'}} />
            </Tooltip>
          </IconButton>

          <IconButton
          color="inherit">
            <Tooltip title="Cobranza">
            <img src={Cobranza} style={{width:'50px', height:'50px'}} />
            </Tooltip>
          </IconButton>

          
        </Toolbar>
      </AppBar>
        </>
     );
}
 
export default NavBar;
