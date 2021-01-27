import React from 'react';

import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline, Container,Breadcrumbs,Link, Box, Divider} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import SearchIcon from '@material-ui/icons/Search';
import * as Yup from 'yup';
import { Formik } from 'formik';

import InformerComercial from '../../assets/imagenes/InformeComercialPlus1.png';

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
    margin: theme.spacing(5, 1),
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
    marginTop: theme.spacing(1),
    marginRight : theme.spacing(2),
    marginLeft: theme.spacing(2)
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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '100vh',
},

}));

const FormInfoCom = () => {

    const classes = useStyles();
    const navigate = useHistory();

    return (
        <div style={{ width: '100%' }}>
            <br />
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                    Portal cheque
                </Link>
                <Link color="inherit" href="/informecomercial">
                    Informe comercial
                </Link>
                
            </Breadcrumbs>
            <br />

            <Box display="flex"  justifyContent="center" >
      
                <CssBaseline />

              <Grid container xs={12} sm={12} md={12} xl={6} lg={6}  component={Paper} elevation={3}  zeroMinWidth>
                <Grid item xs={12} sm={12} md={12} xl={12}  direction="column" justify="center"  alignItems="center">  

                <Typography component="h1" variant="h4" style={{textAlign: 'center', paddingTop: '5px'}} className={classes.paper} > {/*el component es para quelo tome como un h1 */}  
                    
                    <img src={InformerComercial} style={{width:'100px', height:'100px'}} />
                    
                        Informe Comercial                                 
                    </Typography>
                    </Grid>
                  
                    <Grid container xs={12} sm={12} md={12} xl={12}         
                    justify="space-around"
                    alignItems="center" 
                    >
                      
                     <Formik
                    initialValues={{
                        Nrut: "",
                        Nserie: "",
                    }}
            validationSchema={
              Yup.object().shape({
                Nrut: Yup.string().min(8).max(8).required('Debes de indicar Rut'),
                Ndv : Yup.string().min(1).max(1),
                Nserie: Yup.string().min(9).max(9),
              })
            }
            onSubmit={(values) => {
                if (values.Nrut==null && values.Nserie==null){
                    console.log('debes de indicar los parametros solicitados');
                }else{
                    navigate.push("/informeComercial-result");
                }
              
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
              <form onSubmit={handleSubmit} autoComplete="off">
                <Grid
                container
                direction="row"
                justify="left"
                alignItems="left"
                spacing={2}
                >
                <Grid item xs={12} sm={12} xl={7} md={7} lg={7}>
                 
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
                  variant="outlined"/>
                
               </Grid>
               <Grid item xs={12} sm={12} xl={2} md={2} lg={2}>
                 
                  <TextField
                  error={Boolean(touched.Ndv && errors.Ndv)}
                  fullWidth
                  helperText={touched.Ndv && errors.Ndv}
                  label=""
                  margin="normal"
                  name="Ndv"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Ndv}
                  variant="outlined"
                  disabled={true}/>
                
               </Grid>

                    </Grid>
               
               
               
                
                <TextField
                  error={Boolean(touched.Nserie && errors.Nserie)}
                  fullWidth
                  helperText={touched.Nserie && errors.Nserie}
                  label="N° Documento"
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
                    variant="contained">
                    Informe Comercial
                  </Button>
                  <br/><br/><br/>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="outlined">
                    Limpiar
                  </Button>
                </Box>
              
              </form>
            )}
          </Formik>

                    </Grid>
                  </Grid>
           
                  </Box>

        </div>
    )
}
export default FormInfoCom;