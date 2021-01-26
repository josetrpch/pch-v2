import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Paper, Typography, Grid, Divider, Button, Box } from '@material-ui/core';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

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
 
    
    <Grid container  direction="row" justify="center" alignItems="center" >
      
    <Grid item={true} xs={12} sm={4} xl={3} md={4} lg={4} className={estilo.SeleccionSituacionRiesgo}  >
    <Card>
    <Button variant="contained" style={{
        
        width: '100%',
        backgroundColor: '#ed3939', 
        color: 'white',
        height: '100px',
        fontsize: '20px',
        
         }} >
       < ThumbDownIcon />
     </Button>
      
      </Card>
      
      <Typography variant="h6" style={{background: '#f5f5f5'}} align="center">  Alto</Typography>
          
    </Grid>
         
    <Grid item={true} xs={12} sm={4} xl={3} md={4} lg={4}>
      <Box style={{backgroundColor:'#d5d6db'}}>

      <Card style={{backgroundColor:'#d5d6db'}}>
    <Button variant="contained" style={{
        
        width: '100%',
     
        color: 'white',
        height: '100px',
        fontsize: '20px',
         }} >
       Medio
     </Button>
     </Card>
     </Box>
    </Grid>
    <Grid item={true} xs={12} sm={4} xl={3} md={4} lg={4}  >
    <Card style={{backgroundColor:'#d5d6db'}}>
    <Button variant="contained" style={{
        
        width: '100%',
     
        color: 'white',
        height: '100px',
        fontsize: '20px',
         }} >
       Bajo
     </Button>
     </Card>
            

       
        
   
    </Grid>
     
    
    </Grid>
    </>
    
  );
}
export default SituacionRiesgoCard;
