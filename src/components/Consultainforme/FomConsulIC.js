import React from 'react'
import { useHistory } from 'react-router-dom';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    makeStyles,
    Breadcrumbs, 
    Card, 
    CardContent, 
    Avatar, 
    Paper,
    CssBaseline
  } from '@material-ui/core';
  import SearchIcon from '@material-ui/icons/Search';
  import * as Yup from 'yup';
  import { Formik } from 'formik';

  const useStyles =  makeStyles( (theme) =>({
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
        width: '100%', // Fix IE 11 issue.
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
  }))

const FomConsulIC = () => {
    const classes = useStyles();
    const navigate = useHistory();
   
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

            <Box
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent="center"
            >
        <Container xs={12} sm={8} md={8} xl={8} component={Paper} >
        <CssBaseline />
            
                <Typography component="h1" variant="h4" style={{ textAlign: 'center', paddingTop: '5px' }} className={classes.paper} > {/*el component es para quelo tome como un h1 */}
                            <Avatar className={classes.avatar} variant="rounded">
                                <SearchIcon />
                            </Avatar>
                        Informe Comercial
                    </Typography>
            <Formik
            initialValues={{
                Nrut: "",
                Nserie: "",
            }}
            validationSchema={
              Yup.object().shape({
                Nrut: Yup.string().min(9).max(9).required('Debes de indicar Rut'),
                Nserie: Yup.string().min(9).max(9).required('Debes de indicar el N° Serie'),
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
              <form onSubmit={handleSubmit}>
            
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
                    color="secondary"
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
                
      
        </Container>
      </Box>
        </div>
    )
}

export default FomConsulIC;
