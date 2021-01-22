import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline, Card, CardContent, Box, Container, Divider, Tooltip } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';



import Graficos from '../Graficos/Graficos';
import TblDetalleConsultasRut from './TblDetalleConsultasRut';
import SituacionRiesgoCard from '../Graficos/SituacionRiesgoCard';
import GrafCumplimiento from '../Graficos/GrafCumplimiento';
import TblDOcumentoPortalchq from './TblDOcumentoPortalchq';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        width: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)

    },
    palette: {
        primary: {
            main: '#303f9f',
            color: 'white'
        },
        secondary: {
            main: '#ff001e',
            backgroundColor: '#ff001e'
        },
    },

    paper: {
        margin: theme.spacing(5, 4),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        


    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
    },

    indicadores: {
        padding: '60px',
        alignContent: 'center',

    },
    buttonSuccess: {
        backgroundColor: '#04ba65',
        color: 'white',
        '&:hover': {
            backgroundColor: '#02bf67',
            color: 'white',
        },
    },

    ButtonDanger: {
        backgroundColor: '#e8e3e4',
        color: 'white',
        '&:hover': {
            backgroundColor: '#d1cbcc',
            color: 'white',
        },
    },


}));

const formatterPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })


const InformeRessult = (props) => {
    const classes = useStyles();
   

  

    return (
        <>
       
       
       
  
   
            <Grid component="main" >
                <CssBaseline />
                <Card>
                    
                    <CardContent>
                    <Typography varient="p" align="right"><strong>Folio: No. 5723769</strong></Typography>
                        <Grid item xs={12} sm={12} xl={12} md={12}  className={classes.paper}>
                       
                            <Typography component="h1" variant="h4" color="primary"> {/*el component es para que lo tome como un h1 */}
                            COMERCIALIZADORA AIS SPA
                            </Typography>
                            <Typography varient="p"><strong>Rut:</strong> 76.540.287-5</Typography>
                            <Typography varient="p"><strong>Rubro:</strong> VTA POR MAYOR DE ART DE PERF COSMETICO Y PROD LIMP</Typography>
                            <Typography varient="p"><strong>Teléfonos:</strong> 938669776 - 938669789 </Typography>
                           
                        </Grid>
                        <Grid container direction="row" justify="space-evenly" alignItems="baseline" >
                        <Grid item={true} xs={12} md={3}  >
                              
                                <CardContent>

                                    <Typography align="center">Montos total impagados</Typography>

                                    <Typography variant="h5" align="center" style={{color: 'red'}}>No registra</Typography>
                                    
                                </CardContent>
                                <Typography align="center">Puntaje calculado al 27 OC 2020</Typography>
                                

                            </Grid>
                            <Grid item={true} xs={12} md={3}  >
                                
                                <CardContent>

                                    <Typography align="center">Total documentos impagados</Typography>

                                    <Typography variant="h5" align="center" style={{color: 'red'}}>No registra</Typography>
                                    
                                </CardContent>
                                <Typography align="center">Puntaje calculado al 27 OCT 2020</Typography>
                                

                            </Grid>

                            <Grid item={true} xs={12} md={3}  >
                                
                                <CardContent>

                                    <Typography align="center">Indicadores de Riesgo</Typography>

                                    <Typography variant="h5" align="center">999</Typography>
                                    
                                </CardContent>
                                <Typography align="center">Puntaje calculado al 27 OCt 2020</Typography>
                                

                            </Grid>
                            <Grid item={true} xs={12} md={3} >
                                
                                <CardContent>
                                    <Typography align="center"> Tamaño de la Empresa</Typography>
                                    <Typography variant="h5" align="center">Grande</Typography>
                                </CardContent>
                                <Typography align="center">Facturación: 100.000 UF o más</Typography>
                                
                            </Grid>

                        </Grid>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid component="main" className={classes.root} >
                        
                        <Card>
                    
                    <CardContent>
                        <Box
                            mt={3}
                            mb={1}
                        >

                            <Grid
                                container
                                direction="row"
                                borderBottom={2}
                            >
                                <Grid item={true} xs={12} md={3} elevation={1} >

                                    <CardContent >
                                        <div align="center">
                                            <Typography align="center">Registro de Quiebra</Typography>
                                        </div>
                                        <br />
                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                               <Tooltip title="Ver más información">
                                               <Typography variant="h5" align="center" ><CheckIcon/></Typography>
                                                </Tooltip>
                                              
                                            </Fab>
                                        </div>
                                    </CardContent>

                                </Grid>

                                <Grid item={true} xs={12} md={3} elevation={1}>

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Participación en Sociedades</Typography>
                                        </div>

                                        <br />
                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                               <Typography variant="h5" align="center" ><CheckIcon/></Typography>
                                            </Fab>
                                        </div>
                                    </CardContent>

                                </Grid>
                                <Grid item={true} xs={12} md={3} elevation={1} >

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Registra Propiedades</Typography>

                                        </div>
                                        <br />
                                        <div align="center">
                                        <Badge badgeContent={2} color="primary">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                                <Typography variant="h5" align="center" ><CheckIcon/></Typography> &nbsp;
                                                
                                              
                                                
                                            </Fab>
                                            </Badge>
                                            
                                                <Typography  align="center" style={{marginTop : '15px'}} ><strong>Total Avalúo</strong> &nbsp; {formatterPeso.format(5582971)}</Typography>
                                        </div>

                                    </CardContent>

                                </Grid>
                                <Grid item={true} xs={12} md={3} elevation={1}  >

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Presenta Boletin Laboral</Typography>
                                        </div>
                                        <br />

                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                               <Typography variant="h5" align="center" ><CheckIcon/></Typography>
                                            </Fab>
                                        </div>


                                    </CardContent>

                                </Grid>
                             
                            </Grid>


                        </Box>
                    </CardContent>

                </Card>




            </Grid>

            <Grid container direction="row" justify="space-evenly" spacing={2}   alignItems="flex-start" >

            <Grid  xs={12} sm={12} xl={6} md={6} className={classes.root} >
                <CssBaseline />
                <Card>
                    <CardContent>
                          <br />
                        < SituacionRiesgoCard />
                        <br />
                       
                      
                    </CardContent>
                </Card>

                
            </Grid>
            <Grid  xs={12} sm={12} xl={6} md={6}   className={classes.root} spacing={2}>
                <CssBaseline />
                <Card>
                    <CardContent>
                          
                        <br />
                       < GrafCumplimiento />
                      
                    </CardContent>
                </Card>

                
            </Grid>

       
            </Grid>
        
            <Grid component="main" className={classes.root} >
            <Grid  xs={12} sm={12} xl={12} md={12}   className={classes.root}>
                <CssBaseline />
                <Card>
                    <CardContent>
                       
                        <Graficos />
                        <Grid>
                            <br />
                        </Grid>
                       
                      
                    </CardContent>
                </Card>

                
            </Grid>

            </Grid>
            <Grid  container direction="row" justify="space-evenly" alignItems="flex-start" >
            <Grid  xs={12} sm={12} xl={6} md={6}   className={classes.root}>
                <CssBaseline />
                <Card>
                    <CardContent>
                       
                        < TblDOcumentoPortalchq />
                    
                      
                       
                      
                    </CardContent>
                </Card>

                
            </Grid>


            <Grid  xs={12} sm={12} xl={6} md={6}   className={classes.root}>
                <CssBaseline />
                <Card>
                    <CardContent>
                      
                        <TblDetalleConsultasRut />
                      
                    </CardContent>
                </Card>

                
            </Grid>

            </Grid>
    
        </>
    )
}
export default InformeRessult;