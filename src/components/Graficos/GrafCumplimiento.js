
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Paper, Typography, Grid, Divider,Button} from '@material-ui/core';


import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CheckIcon from '@material-ui/icons/Check';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
  
      SeleccionSituacionRiesgo : {
          backgroundColor : '#f5f5f5',
          
      }
    },
  }));



 

const GrafCumplimiento = () => {
    const classes = useStyles();
   
    return (

     
      <>
       

      <CardHeader title="Cumplimiento" />
    <Divider />
    <Grid container  direction="row" justify="center" alignItems="center" >
    <Grid item={true} xs={12} sm={4} md={4}   >
    <Button variant="contained" style={{
        
        width: '100%',
        backgroundColor: '#ed3939', 
        color: 'white',
        height: '100px',
        fontsize: '20px',
         }} >
       ---
     </Button>
            <Typography variant="h6" style={{background: '#f5f5f5'}} align="center">0 a 60</Typography>
    </Grid>
 
    <Grid item={true} xs={12} sm={4} md={4} className={classes.SeleccionSituacionRiesgo} >
    <Card >
        <CardContent>
           
        <Button variant="contained" style={{
        
        width: '100%',
        backgroundColor: '#22a820', 
        color: 'white',
        height: '100px',
        fontsize: '20px',
         }} >
       < CheckIcon/>  97 Cumplimiento
     </Button>
            <Typography variant="h6" style={{background: '#f5f5f5'}} align="center">70 a 100</Typography>

        </CardContent>
        
    </Card>
    </Grid>
     
    
    </Grid>
    </>
    )
}
export default GrafCumplimiento;