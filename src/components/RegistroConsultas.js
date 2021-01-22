import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Grid, Paper, makeStyles, Typography, InputBase, withStyles, Button, Container, IconButton, Tooltip } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import NativeSelect from '@material-ui/core/NativeSelect';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'

import GraficoBarra from './Graficos/GraficoBarra';




const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        
    },
    paper: {
        margin: theme.spacing(3, 4),                
                
    },
    form: {
        
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(3),
        width: '30%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        
    },
    submit: {
        width: '5%',
        margin: theme.spacing(1, 1, 0),
        padding: theme.spacing(0),
        

    },

}))

const RegistroConsultas = () => {
    const [selectDate, setSelectDate] = useState( new Date("2021-01-02T12:00:00"))

    const [verGrafico, setVerGrafico] = useState(false);

    const handleDate = (e) => {
        setSelectDate(e)
    }

    const handleGrafico = (e) => {
        
        setVerGrafico(true);
        

    }

    




    
    const classes = useStyles();
    return ( 
        <>

        
        <Container container xs={12} sm={8} md={8} xl={8} 
        direction="column"
        justify="center"
        alignItems="center" 
        className={classes.paper} 
        >
    <Grid container xs={12} sm={12} md={12} xl={12}  component={Paper} elevation={3}  zeroMinWidth>

        <Grid item xs={12} sm={12} md={12}  > 

        
        </Grid>

        <Grid item md={12} sm={12}>
        <Button variant="contained" size="small"  color="primary" 
                onClick={handleGrafico} 
                
                style={{float: 'right'}}
                className={classes.submit} 
                >
                <IconButton
                color="inherit"
                >
                  <Tooltip title="Estadisticas Anuales">
                  <AssessmentIcon  />
                  </Tooltip>
                </IconButton>
                
                </Button>
 
        <Typography component="h1" variant="h4" style={{textAlign: 'center', paddingTop: '0px'}} className={classes.paper} > {/*el component es para quelo tome como un h1 */}
            Registro de Consultas            
        </Typography>

        </Grid> 

        <Grid container xs={12} sm={12} md={12} xl={12}         
        justify="space-around"
        alignItems="center" 
        >
   
            <FormControl  >
                <FormLabel> Usuarios </FormLabel>
                    <NativeSelect
                        id="demo-customized-select-native"                        
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>usuario 1</option>
                        <option value={20}>usuario 2</option>
                        <option value={30}>usuario 3</option>
                    </NativeSelect>                
            </FormControl>
            
            <FormControl >
                <FormLabel> Desde </FormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker    
                    //disableToolbar
                    variant='inline'
                    format='dd/MM/yyy'
                    id='Date-picker'
                    label='Fecha inicial'
                    value={selectDate}
                    onChange={handleDate}
                    KeyboardButtonProps={{'aria-label' : 'change date'}}
                    />
                </MuiPickersUtilsProvider>                
            </FormControl>

            <FormControl >
                <FormLabel> Hasta </FormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker    
                    //disableToolbar
                    variant='inline'
                    format='dd/MM/yyy'
                    id='Date-picker'
                    label='Fecha final'
                    value={selectDate}
                    onChange={handleDate}
                    KeyboardButtonProps={{'aria-label' : 'change date'}}
                    />                       
                </MuiPickersUtilsProvider>                
            </FormControl>
            
        </Grid>

        <Grid container xs={12} sm={12} md={12} xl={12} justify="center" alignItems="center" >
            
                <Button variant="contained" size="large"  color="secondary" className={classes.form}
                >
                Consultar
                </Button>

            
        </Grid>

    </Grid>

        <Grid 
        item xs={12} sm={12} md={12} xl={12} 
        direction="column"
        justify="center"
        alignItems="center"
        component={Paper}
        elevation={3}
        >
            { verGrafico ? <GraficoBarra />  : null }
            
            
        
        </Grid>
        
        </Container>

    </>



     );
}
 
export default RegistroConsultas;