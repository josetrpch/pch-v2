import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { TextField,
     Grid, 
     Button, 
     Avatar, 
     Paper, 
     Typography, 
     makeStyles, 
     CssBaseline, 
     Card, 
     CardContent, 
     Box, 
     Container, 
     Divider, 
     Tooltip,
     TableContainer,
     TableCell,
     TableRow,
     Table} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';



import Graficos from '../Graficos/Graficos';
import TblDetalleConsultasRut from './TblDetalleConsultasRut';
import SituacionRiesgoCard from '../Graficos/SituacionRiesgoCard';
import GrafCumplimiento from '../Graficos/GrafCumplimiento';
import TblDOcumentoPortalchq from './TblDOcumentoPortalchq';
import IncadoresConsulta from './IncadoresConsulta';

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
    tituloTable: {

        backgroundColor: theme.palette.primary.main, 
        minWidth: 200,
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontWeight: '250',
        fontSize : '35px'
        },
        TituloIdentificacion: {

            backgroundColor: theme.palette.primary.main, 
            minWidth: 200,
            color: 'white',
            textAlign: 'center',
            padding: '15px',
            fontWeight: '250',
            fontSize : '20px',
            height: 'auto',
            alignContent: 'center'
            
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
            
           
            <div className={classes.tituloTable}>
            
            COMERCIAL BRAFORD LIMITADA
            </div>
          
            <Divider/>  
            
            <Grid component="main" >
                
            
                <CssBaseline />
              
                <Card>
                    
                    <CardContent>
                    <Grid xs={12} sm={12} xl={12} md={12} lg={12} >
                         <Typography varient="p" align="right" style={{color:'#ff2436'}}><strong>Folio: No. 5723769</strong></Typography>
                    </Grid>
                       
                   
                    
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
>
                    <Grid xs={12} sm={12} xl={4} md={4} lg={4} hover >
                    <Card>
                    <div className={classes.TituloIdentificacion}>
                            
                            IDENTIFICACIÓN
                         </div>
                        <CardContent>
                       
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Rut: &nbsp;</strong>76.117.605-6</Typography><hr  />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Rubro:&nbsp;</strong>MAYORISTA DE FRUTAS Y VERDURAS</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Disolución Vigente:&nbsp;</strong>NO</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Fecha Disolución:&nbsp;</strong>-----</Typography><hr />
                           
                        </CardContent>
                    </Card>
                   
                    </Grid>

                    <Grid xs={12} sm={12} xl={4} md={4} lg={4} >
                    <Card>
                    <div className={classes.TituloIdentificacion}>
                            
                            ANTECEDENTES
                         </div>
                        <CardContent>
                    
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Ultima Dirección registrada: &nbsp;</strong>PATRIOTAS URUGUAYOS 2242 C, SANTIAGO, SANTIAGO</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Teléfono uno:&nbsp;</strong>2 28986201</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Teléfono dos:&nbsp;</strong>9 97008149</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Grupo Socio Económico:&nbsp;</strong>-----</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Otras Direcciones Registradas:&nbsp;</strong> SI</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Cónyuge:&nbsp;</strong> NO</Typography><hr />
                        </CardContent>
                    </Card>
                   
                    </Grid>

                    <Grid xs={12} sm={12} xl={4} md={4} lg={4} >
                    <Card>
                    <div className={classes.TituloIdentificacion}>
                            
                            ANTECEDENTES LABORALES
                         </div>
                        <CardContent>
                       
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Actividad Profesional: &nbsp;</strong>NO REGISTRA</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Razón Social:&nbsp;</strong>NO REGISTRA</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>RUT Empresa:&nbsp;</strong>NO REGISTRA</Typography><hr />

                            <Typography variant="body2" color="textPrimary" component="p"><strong>Direcciones:&nbsp;</strong> NO REGISTRA</Typography><hr />
                            <Typography variant="body2" color="textPrimary" component="p"><strong>Teléfonos:&nbsp;</strong> NO REGISTRA</Typography><hr />
                        </CardContent>
                    </Card>
                   
                    </Grid>
            
                    </Grid>
                    <br />
                       <Divider/> <br />
                    <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={2}
                    >
                       
                            <Grid item xs={12} sm={12} xl={4} md={4} lg={4}>
                               <Card>
                               <div className={classes.TituloIdentificacion}>Total Documentos impagados</div>
                                <CardContent>

                                    <Typography variant="h5" align="center" >No registra</Typography>
                                    
                                </CardContent>
                                <Typography align="center">Puntaje calculado al 27 OCT 2020</Typography>
                                </Card>

                            </Grid>

                            <Grid item xs={12} sm={12} xl={4} md={4} lg={4}  >
                            <Card>
                            <div className={classes.TituloIdentificacion}>Indicadores de Riesgo</div>
                                <CardContent>
                                    <Typography variant="h5" align="center">999</Typography>
                                    
                                </CardContent>
                                <Typography align="center">Puntaje calculado al 27 OCt 2020</Typography>
                                </Card>

                            </Grid>
                            <Grid item xs={12} sm={12} xl={4} md={4} lg={4} >
                            <Card>
                            <div className={classes.TituloIdentificacion}>Tamaño de la empresa</div>
                                <CardContent>
                               

                                    <Typography variant="h5" align="center">Grande</Typography>
                                </CardContent>
                                <Typography align="center">Facturación: 100.000 UF o más</Typography>
                                </Card>
                            </Grid>

                        </Grid>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid component="main" className={classes.root} >
                       
                        <div className={classes.tituloTable}>
                        
                        </div>
                        <Card>

                    <CardContent>
                            <Grid
                                container
                                direction="row"
                                spacing={2}
                            >
                                <Grid item xs={12} sm={12} xl={2} md={3} lg={3}  >
                                <Card >
                                <div className={classes.TituloIdentificacion}>Registro de Quiebra
                             
                                </div>
                                    <CardContent >
                                          
                                <div align="center">
                                <br />
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
                                    
                                       
                                    
                                    </Card>

                                </Grid>
                                <Grid item  xs={12} sm={12} xl={2} md={3} lg={3} >
                                <Card>
                                <div className={classes.TituloIdentificacion}>Indicadores de Acreditación
                             
                                </div> 
                                <CardContent >
                                   
                                
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
                                        <Typography  align="left" style={{marginTop : '10px'}}>Cantidad Banco: <strong> 2</strong></Typography><hr />
                                        <Typography  align="left" style={{marginTop : '10px'}}>Bancos en que ha registrado movimientos: <hr /> <strong>ITAU CORPBANCA (EX CORPBANCA),DE CHILE (EX EDWARDS)</strong></Typography>
                                       
                                    </div>
                                </CardContent>
                                </Card>

                                </Grid>

                                <Grid item  xs={12} sm={12} xl={2} md={3} lg={3} >
                                    <Card>
                                    <div className={classes.TituloIdentificacion}>Participación en Sociedades</div> 
                                    <CardContent>
                                        

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
                                    </Card>

                                </Grid>
                                <Grid item xs={12} sm={12} xl={2} md={3} lg={3} >
                                <Card>
                                <div className={classes.TituloIdentificacion}>Registra Propíedades</div>
                                    <CardContent>
                                        
                                        <br />
                                        <div align="center">
                                       
                                        
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                                <Typography variant="h5" align="center" ><CheckIcon/></Typography> &nbsp;
                                                
                                              
                                                
                                            </Fab>
                                            
                                            <Typography  align="left" style={{marginTop : '15px'}} >Cantidad Propiedad: <strong> 7</strong> </Typography>
                                                <Typography  align="left" style={{marginTop : '15px'}} >Total Avalúo:  <strong>{formatterPeso.format(635232445)} </strong> </Typography><hr/>
                                                <Typography  align="left" style={{marginTop : '15px'}} >Registra información de Propiedades: <strong> SI </strong> </Typography>
                                        </div>

                                    </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} sm={12} xl={2} md={3} lg={3}  >
                                    <Card>
                                    <div className={classes.TituloIdentificacion}>Presenta Boletin Laboral</div>
                                    <CardContent>
                                        
                                        <br />

                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                               <Typography variant="h5" align="center" ><CheckIcon/></Typography>
                                            </Fab>
                                            <Typography  align="left" style={{marginTop : '15px'}} >Fecha ultimo boletín:<strong>10-12-2020</strong></Typography><hr/>
                                            <Typography  align="left" style={{marginTop : '15px'}} >Total documento:  <strong>1259</strong> </Typography>
                                        </div>


                                    </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} sm={12} xl={2} md={3} lg={3}  >
                                    <Card style={{backgroundColor:'#d5d6db'}}>
                                    <div className={classes.TituloIdentificacion}>Registra Vehículo</div> 
                                    <CardContent>
                                     
                                        <br />

                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.ButtonDanger}
                                                align="center"
                                            >
                                               <Typography variant="h5" align="center" ><CloseIcon/></Typography>
                                            </Fab>
                                           
                                        </div>


                                    </CardContent>
                                    </Card>

                                </Grid>

                                <Grid item xs={12} sm={12} xl={2} md={3} lg={3}  >
                                    <Card>
                                    <div className={classes.TituloIdentificacion}>Registra Morosidad</div> 
                                    <CardContent>
                                        
                                        <br />

                                        <div align="center">
                                       
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                               <Typography variant="h5" align="center" ><CheckIcon/></Typography>
                                            </Fab>
                                           
                                            <Typography  align="left" style={{marginTop : '15px'}} >Total impagos:<strong>6</strong></Typography><hr/>
                                            <Typography  align="left" style={{marginTop : '15px'}} >Fecha Vencimiento Último Impago: <strong> 02-03-2020</strong></Typography> 
                                           
                                        </div>


                                    </CardContent>
                                    </Card>

                                </Grid>

                                <Grid item xs={12} sm={12} xl={2} md={3} lg={3}  >
                                    <Card>
                                    <div className={classes.TituloIdentificacion}>Registro de Protestos</div> 
                                    <CardContent>
                                        
                                        <br />

                                        <div align="center">
                                       
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                               <Typography variant="h5" align="center" ><CheckIcon/></Typography>
                                            </Fab>
                                           
                                            <Typography  align="left" style={{marginTop : '15px'}} >Total impagos:<strong>11</strong></Typography><hr/>
                                            <Typography  align="left" style={{marginTop : '15px'}} >Fecha Vencimiento Último Impago: <strong> 01-09-2020</strong> </Typography>
                                           
                                        </div>


                                    </CardContent>
                                    </Card>

                                </Grid>
                             
                            </Grid>


                       
                    </CardContent>

                </Card>




            </Grid>

            <Grid container direction="row" justify="space-evenly"  alignItems="flex-start" >

            <Grid  xs={12} sm={12} xl={6} md={6}   >
                <CssBaseline />
                <Card>
                <div className={classes.TituloIdentificacion}>Situación de Riesgo</div>
                    <CardContent>
                          <br />
                        < SituacionRiesgoCard />
                        <br />
                       
                      
                    </CardContent>
                </Card>

                
            </Grid>
            <Grid  xs={12} sm={12} xl={6} md={6}   margin={2,2,2,2}>
                <CssBaseline />
                <Card>
                <div className={classes.TituloIdentificacion}>Cumplimiento</div>
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