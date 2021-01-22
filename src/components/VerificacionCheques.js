import React from 'react';
import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline, Container, NativeSelect } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
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
        margin: theme.spacing(4, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(0),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '50%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
        
    },
    submit: {
        width: '100%',
        margin: theme.spacing(2, 0, 2),
        padding: theme.spacing(1),
        

    },
    cancel: {
        width: '100%',
        margin: theme.spacing(2, 0, 1),
        padding: theme.spacing(1),
        color: 'white',

    },

    select: {
        width: '100%',
    },
}))



const VerificacionCheques = () => {

    const history = useHistory();
    const classes = useStyles();

    const ConsultaDatos = () => {

        history.push("/registroconsulta-result");
    }



    return (
        <div>
        <Container container xs={12} sm={8} md={8} xl={8} 
        direction="column"
        justify="center"
        alignItems="center"   
        className={classes.paper}       
        >
                <CssBaseline />
                
                <Grid container xs={12} sm={8} md={8} xl={8}  component={Paper}  elevation={3}  zeroMinWidth>
                    <Grid item xs={12} sm={12} md={12} xl={12}                         
                        direction="column"
                        justify="center"
                        alignItems="center">  

                                                      
                    <Typography component="h1" variant="h4" style={{textAlign: 'center', paddingTop: '5px'}} className={classes.paper} > {/*el component es para quelo tome como un h1 */}  
                    <Avatar className={classes.avatar} variant="rounded">
                        <CheckCircleIcon />
                    </Avatar>
                        Verificacion de Cheques y ONP                                  
                    </Typography>
                    </Grid>
                    <Grid container xs={12} sm={12} md={12} xl={12}         
                    justify="space-around"
                    alignItems="center" 
                    >
                                
           
                    <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                            type="text"
                            id="standar-error"
                            margin="normal"
                            fullWidth
                            name="NRut"
                            variant="outlined"
                            required
                            label="Rut"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (264641799)"
                            
                        />
                        <TextField
                            type="text"
                            xs={12} sm={12} md={12} xl={12}  id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Nserie"
                            variant="outlined"
                            required
                            label="Serie"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (601456988)"
                            

                        />
                        <TextField
                            type="text"
                            xs={12} sm={12} md={12} xl={12}  id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Nserie"
                            variant="outlined"
                            required
                            label="Cuenta Corriente"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (601456988)"
                            

                        />
                        <TextField
                            type="text"
                            xs={12} sm={12} md={12} xl={12}  id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Nserie"
                            variant="outlined"
                            required
                            label="Numero de Documento"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (601456988)"
                            

                        />
                         <TextField
                            type="text"
                            xs={12} sm={12} md={12} xl={12}  id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Nserie"
                            variant="outlined"
                            required
                            label="Monto"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (601456988)"
                            

                        />
                        <NativeSelect
                        id="demo-customized-select-native"
                        className={classes.select}
                        
                        
                        >
                        <option aria-label="Banco" value="" />
                        <option value={10}>usuario 1</option>
                        <option value={20}>usuario 2</option>
                        <option value={30}>usuario 3</option>
                    </NativeSelect>   
                        
                  
                        <Button
                            type="submit"
                            xs={12} sm={12} md={12} xl={12}  fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={ConsultaDatos} 
                        >Consultar
                    </Button>


                    </form>
                    </Grid>
                    
                    </Grid>
                
            </Container>
        </div>
    )
}
 
export default VerificacionCheques;
