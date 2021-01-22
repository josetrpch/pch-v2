import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Paper, Typography, Grid, Divider, Button } from '@material-ui/core';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },

    SeleccionSituacionRiesgo : {
        backgroundColor : '#f5f5f5',
        
    }, 

    
    

  },
}));

const SituacionRiesgoCard =() => {
  const estilo = useStyles();
  const [open, setOpen] = React.useState(false);


  return (
      <>
      <CardHeader title="Situación de Riesgo" />
    <Divider />
          <Grid container  direction="row" justify="center" alignItems="center" >
    <Grid item={true} xs={12} sm={4} md={4}  >
        <Button variant="contained" style={{
        
         width: '100%',
         backgroundColor: '#ed3939', 
         color: 'white',
         height: '100px',
         fontsize: '20px',
          }} >
        Alto
      </Button>
          
    </Grid>
 
    <Grid item={true} xs={12} sm={4} md={4}  >
    <Button variant="contained" style={{
        
        width: '100%',
        backgroundColor: '#f5a30a', 
        color: 'white',
        height: '100px',
        fontsize: '20px',
         }} >
       Medio
     </Button>
    </Grid>
    <Grid item={true} xs={12} sm={4} md={4} className={estilo.SeleccionSituacionRiesgo} >
    <Card >
        <CardContent>
           
        <Button variant="contained" style={{
        
        width: '100%',
        backgroundColor: '#22a820', 
        color: 'white',
        height: '100px',
        fontsize: '20px',
         }} >
       Bajo
     </Button>
            <Typography variant="h4" style={{background: '#f5f5f5'}} align="center">< CheckIcon /> </Typography>

        </CardContent>
        
    </Card>
    </Grid>
     
    
    </Grid>
    </>
    
  );
}
export default SituacionRiesgoCard;
