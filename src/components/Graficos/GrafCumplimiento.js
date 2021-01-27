
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Paper, Typography, Grid, Divider,Button, Box} from '@material-ui/core';


import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
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
       
    <Grid container  direction="row" justify="center" alignItems="center" >
    <Grid item xs={12} sm={4} md={4} xl={4} lg={4}   >
    

    <Card style={{backgroundColor:'#d5d6db'}}>
  
    <Button variant="contained" style={{
        
        width: '100%',
        backgroundColor: '#ed3939', 
        color: 'white',
        height: '100px',
        fontsize: '25px',
         }} >
           
           <ThumbDownIcon  /> 
          
           
     </Button>
     </Card>
   
            <Typography variant="h6" style={{background: '#f5f5f5'}} align="center">12 % Cumplimiento</Typography>
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
       <ThumbUpAltIcon/>
     </Button>
     </Card>
     </Box>
    </Grid>
  
     
    
    </Grid>
    </>
    )
}
export default GrafCumplimiento;