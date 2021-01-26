import React from 'react';

import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline, Container,Breadcrumbs,Link, Box} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import SearchIcon from '@material-ui/icons/Search';
import * as Yup from 'yup';
import { Formik } from 'formik';
const useStyles = makeStyles((theme) => ({

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
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        backgroundColor: theme.palette.primary
    },
    submit: {
        width: '100%',
        margin: theme.spacing(1, 0, 2),
        padding: theme.spacing(1),

    },
    cancel: {
        width: '100%',
        margin: theme.spacing(2, 0, 1),
        padding: theme.spacing(1),
        color: 'white',


    },
    textField: {
        width: '100%',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        
    },
   


}));

const FormInfoCom = () => {

    const ConsultaDatos = () => {

        history.push("/informeComercial-result");
    }

    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <br />
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                    Portal cheque
                </Link>
                <Link color="inherit" href="/informecomercial">
                    Informe comercial
                </Link>
                
            </Breadcrumbs>

            <Container container xs={12} sm={8} md={8} xl={8}
                direction="column"
                justify="center"
                className={classes.paper}>
            
                <CssBaseline />
                
                <Grid container xs={12} sm={8} md={8} xl={8} component={Paper} elevation={1} zeroMinWidth >
                    <Grid item xs={12} sm={12} md={12} xl={12}
                        direction="column"
                        justify="center"
                        alignItems="center">


                        <Typography component="h1" variant="h4" style={{ textAlign: 'center', paddingTop: '5px' }} className={classes.paper} > {/*el component es para quelo tome como un h1 */}
                            <Avatar className={classes.avatar} variant="rounded">
                                <SearchIcon />
                            </Avatar>
                        Informe Comercial
                    </Typography>
                    </Grid>
                    <Grid container xs={12} sm={12} md={12} xl={12}
                        justify="space-around"
                        alignItems="center"
                        
                    >


<Formik
            initialValues={{
                Nrut: '',
                Nserie: '',
            }}
            validationSchema={
              Yup.object().shape({
                Nrut: Yup.string().min(9).max(9).required('Debes de indicar Rut'),
                Nserie: Yup.string().min(9).max(9).required('Debes de indicar N° documento'),
              })
            }
            onSubmit={(values) => {
              console.log('values'+values.Nrut);
              console.log('values'+values.Nserie);
              //navigate.push("/informeComercial-result");
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h5"
                    align="center"
                  >
                    Consulta Informe comercial
                  </Typography>
                 
                </Box>
                <TextField
                  error={Boolean(touched.Nrut && errors.Nrut)}
                  fullWidth
                  helperText={touched.Nrut && errors.Nrut}
                  label="N° Rut"
                  margin="normal"
                  name="Nrut"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Nrut}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Nserie && errors.Nserie)}
                  fullWidth
                  helperText={touched.Nserie && errors.Nserie}
                  label="N° Serie"
                  margin="normal"
                  name="Nserie"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Nserie}
                  variant="outlined"
                />
               
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    
                  >
                    Informe Comercial
                  </Button>
                </Box>
              
              </form>
            )}
          </Formik>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}
export default FormInfoCom;