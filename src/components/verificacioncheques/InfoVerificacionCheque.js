import React from 'react';
import {makeStyles, Tooltip, CssBaseline, Grid, Typography, CardContent} from '@material-ui/core';
import CardsHeader from '../CardsHeader';
import Cards from '../Cards';


import Fab from '@material-ui/core/Fab';
import Tabla1 from '../Tabla1';
import Tabla2 from '../Tabla2';

import ConsultaApi from '../ConsultaApi';
import ConsultaApi2 from '../ConsultaApi2';

const useStyle = makeStyles( (theme) =>({
    root: {
        flexGrow: 1,
        margin: theme.spacing(3, 4), 
    },
    buttonSuccess: {
        backgroundColor: '#04ba65',
        color: 'white',
        '&:hover': {
            backgroundColor: '#02bf67',
            color: 'white',
        },
    },
    buttonNo: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
    }
}));





const InfoVerificacionCheque = () => {

    const classes = useStyle();
    
   
    return (  
        <div className={classes.root}>
            <CssBaseline />
            
            <Grid container spacing={3}>
                <Grid item xd={12} sm={12} md={12} xl={12}>
                    <CardsHeader titulo="Nombre Empresa" rut="76.684.135-0" giro="Comercializadora de weas" direccion="chuchunco city 321" />
                </Grid>


                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12} > 
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Cards titulo="Nro. Documento" dato="1234567" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Cards titulo="Serie" dato="ab34567" />
                    </Grid>

                </Grid>

                <Grid item xs={0} sm={0} md={1} lg={1} xl={1} />  {/*espacio entre los cuadros*/}

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12} > 
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                        <Cards titulo="Cta Corriente" dato="78552115" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                        <Cards titulo="Monto" dato="30.000" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                        <Cards titulo="Banco" dato="Banco de Chile" />
                    </Grid>

                </Grid>

                
                <Grid item xd={12} sm={12} md={12} xl={12}>
                    
                    
                        {/*<DataTable/>*/}
                        <ConsultaApi/>
                    
                    
                    
                </Grid>


                <Grid container >
                                <Grid item={true} xs={12} md={4} elevation={1} >

                                    <CardContent >
                                        <div align="center">
                                            <Typography align="center">Registro Orden de no Pago</Typography>
                                        </div>
                                        <br />
                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonNo}
                                                align="center"
                                            >
                                               <Tooltip title="Ver más información">
                                               <Typography variant="h5" align="center" >SI</Typography>
                                                </Tooltip>
                                              
                                            </Fab>
                                            <Typography  align="center" style={{marginTop : '15px'}} ><strong>Motivo: </strong> No especificado </Typography>
                                        </div>
                                    </CardContent>

                                </Grid>

                                <Grid item={true} xs={12} md={4} elevation={1}>

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Registra cta. Corriente Cerrada</Typography>
                                        </div>

                                        <br />
                                        <div align="center">
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                               <Typography variant="h5" align="center" >NO</Typography>
                                            </Fab>
                                        </div>
                                    </CardContent>

                                </Grid>
                                <Grid item={true} xs={12} md={4} elevation={1} >

                                    <CardContent>
                                        <div align="center">
                                            <Typography align="center">Registra Consulta al Cheque</Typography>

                                        </div>
                                        <br />
                                        <div align="center">
                                        
                                            <Fab
                                                aria-label="save"
                                                className={classes.buttonSuccess}
                                                align="center"
                                            >
                                                <Typography variant="h5" align="center" >SI</Typography> 
                                                
                                              
                                                
                                            </Fab>
                                            
                                            
                                                <Typography  align="center" style={{marginTop : '15px'}} ></Typography>
                                        </div>

                                    </CardContent>

                                </Grid>

                             
                            </Grid>

                

                            <Grid item xd={12} sm={12} md={12} xl={12}>
                    
                    {/*<DataTable2/>*/}
                        <ConsultaApi2/>
                    
                    
                    
                </Grid>





            </Grid>
        </div>
    );
}
 
export default InfoVerificacionCheque;