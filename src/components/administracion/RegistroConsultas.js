import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import { Grid, Paper, makeStyles, Typography, Button, Container, Tooltip} from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'

import GraficoBarra from '../Graficos/GraficoBarra';

import Fade from '@material-ui/core/Fade';

import Switch from "@material-ui/core/Switch";

//importacion para modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
// tabla modal


import ConsultaApi from '../ConsultaApi'; // moda de prueba



const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        
    },
    paper: {
        margin: theme.spacing(3, 2),                
                
    },
    form: {
        
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(3),
        width: '100%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        
    },
    submit: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(3),
        width: '30%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      papermodal: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(1, 1, 1),
        
      },
}))

const RegistroConsultas = () => {
    const [selectDate, setSelectDate] = useState( new Date("2021-01-02T12:00:00"))

    const [verGrafico, setVerGrafico] = useState(false);

    const [open, setOpen] = useState(false);


    const handleDate = (e) => {
        setSelectDate(e)
    }


    const handleChange = () => {
        setVerGrafico((prev) => !prev);
      };
      
        
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
 


    
    const classes = useStyles();
    return ( 
        <>

        
<Container xs={12} sm={12} md={12} xl={12} lg={12} 
        
        justify="center"
        alignItems="center" 
        className={classes.paper} 
        component={Paper}
        >
    <Grid spacing={1} container xs={12} sm={8} md={3} lg={12} xl={12}   elevation={3}  zeroMinWidth>

        

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <div style={{float: 'right'}}>                                                          
                <FormControlLabel variant="contained" size="small"  color="primary" 
                        control={<Switch checked={verGrafico} onChange={handleChange}   value="ahora" inputProps={{ 'aria-label': 'grafico' }} ></Switch> } 
                        className={classes.submit} >                                                                                                       
                </FormControlLabel>       
            </div>
 
            <Typography component="h1" variant="h4" style={{textAlign: 'center'}} className={classes.paper} > {/*el component es para quelo tome como un h1 */}
                Registro de Consultas            
            </Typography>

        </Grid> 

        <Grid container spacing={1} xs={12} sm={12} md={12} xl={12} lg={12}        
        justify="space-between"
        alignItems="center" 
        >
  
            <FormControl  >
                <FormLabel> Usuarios </FormLabel>
                    <NativeSelect
                        id="demo-customized-select-native"    
                        className={classes.form}                    
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

        <Grid container xs={12} sm={12} md={12} xl={12} lg={12} justify="center" alignItems="center" >
            
                <Button variant="contained" type="submit" xs={12} sm={12} md={12} xl={12} lg={12} color="secondary" fullWidth className={classes.submit}
                onClick={handleOpen}>
                Consultar
                </Button>
               






                <div>

                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                <Fade in={open}>
                    <div className={classes.papermodal}>
                    <ConsultaApi/> {/*aqui ira la vista con la informacion desde la api de la tabla*/}
                    </div>
                </Fade>
                </Modal>
                </div>

            
        </Grid>

    </Grid>

        <Fade in={ verGrafico }>
            <Grid 
            item xs={12} sm={12} md={12} xl={12} 
            direction="column"
            justify="center"
            alignItems="center"
            component={Paper}
            elevation={1}
            >
                
                { verGrafico ?  <GraficoBarra /> : null  }
                
                
            
            </Grid>
        </Fade>
        
</Container>

    </>



     );
}
 
export default RegistroConsultas;